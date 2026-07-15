import React, { useState, useEffect, useRef } from 'react';
import useFadeIn from '../hooks/useFadeIn';
import { fetchGithubAnalytics } from '../utils/githubApi';

const GithubAnalytics = () => {
    const sectionRef = useFadeIn();
    const [username, setUsername] = useState('chaitanya-7023');
    const [searchInput, setSearchInput] = useState('chaitanya-7023');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data whenever username changes
    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        setError(null);
        
        fetchGithubAnalytics(username)
            .then(res => {
                if (isMounted) {
                    setData(res);
                    setLoading(false);
                }
            })
            .catch(err => {
                if (isMounted) {
                    setError('Could not retrieve statistics. Please check the username.');
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [username]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            setUsername(searchInput.trim());
        }
    };

    return (
        <section id="github-analytics" className="github-analytics section-spacing" ref={sectionRef}>
            <div className="container">
                <div className="analytics-header fade-in">
                    <h2 className="section-title">GitHub <span className="accent-pink">Analytics</span></h2>
                    <p className="analytics-subtitle">Real-time developer metrics, contribution history, and languages</p>
                </div>

                {/* Search Bar */}
                <form onSubmit={handleSearchSubmit} className="github-search-form fade-in">
                    <div className="search-input-wrapper">
                        <i className="fab fa-github search-icon"></i>
                        <input
                            type="text"
                            placeholder="Enter GitHub username..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className="github-input"
                        />
                        <button type="submit" className="github-btn btn-primary">
                            <span>Analyze</span>
                        </button>
                    </div>
                </form>

                {loading ? (
                    <LoadingSkeletons />
                ) : error ? (
                    <div className="analytics-error glass-card fade-in">
                        <i className="fas fa-exclamation-triangle"></i>
                        <p>{error}</p>
                    </div>
                ) : (
                    <div className="analytics-dashboard-grid fade-in">
                        {/* Profile Summary Card */}
                        <div className="dashboard-card glass-card span-2 glow-pink">
                            <ProfileCard profile={data.profile} totalContribs={data.totalContributionsYear} />
                        </div>

                        {/* Top Languages by Repository */}
                        <div className="dashboard-card glass-card glow-cyan">
                            <LanguageDoughnutChart title="Top Languages (by Repo)" chartData={data.topLanguagesRepo} />
                        </div>

                        {/* Top Languages by Commits */}
                        <div className="dashboard-card glass-card glow-yellow">
                            <LanguageDoughnutChart title="Top Languages (by Commits)" chartData={data.topLanguagesCommit} />
                        </div>

                        {/* GitHub Statistics Card */}
                        <div className="dashboard-card glass-card span-2 glow-purple">
                            <StatsCard stats={data.stats} />
                        </div>

                        {/* Contribution Line Graph */}
                        <div className="dashboard-card glass-card span-2 glow-pink">
                            <ContributionHistoryGraph data={data.contributionsMonthly} />
                        </div>

                        {/* Commit Activity by Hour */}
                        <div className="dashboard-card glass-card span-2 glow-cyan">
                            <CommitHourlyGraph hourData={data.commitActivityHour} />
                        </div>

                        {/* Interactive Grid & Snake Animation */}
                        <div className="dashboard-card glass-card span-full glow-yellow">
                            <ContributionSnakeGrid contributions={data.contributionsGrid} username={username} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

// ==================== SUB-COMPONENTS ====================

// 1. Profile Summary Card
const ProfileCard = ({ profile, totalContribs }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="profile-summary-layout">
            <div className="profile-avatar-container">
                <img src={profile.avatar_url} alt={profile.name} className="profile-avatar-img" />
            </div>
            <div className="profile-text-details">
                <h3 className="profile-name">{profile.name}</h3>
                <p className="profile-username">@{profile.login}</p>
                <div className="profile-badge-row">
                    <span className="profile-badge"><i className="fas fa-calendar-alt"></i> Joined {formatDate(profile.created_at)}</span>
                    {profile.email && <span className="profile-badge"><i className="fas fa-envelope"></i> {profile.email}</span>}
                </div>
                <div className="profile-stats-metrics">
                    <div className="metric-box">
                        <span className="metric-num">{profile.public_repos}</span>
                        <span className="metric-lbl">Repositories</span>
                    </div>
                    <div className="metric-box">
                        <span className="metric-num">{profile.followers}</span>
                        <span className="metric-lbl">Followers</span>
                    </div>
                    <div className="metric-box">
                        <span className="metric-num">{profile.following}</span>
                        <span className="metric-lbl">Following</span>
                    </div>
                    <div className="metric-box highlighted">
                        <span className="metric-num">{totalContribs}</span>
                        <span className="metric-lbl">Yearly Contributions</span>
                    </div>
                </div>
                <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="profile-github-link-btn">
                    View GitHub Profile <i className="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    );
};

// 2. Interactive SVG Doughnut Chart (Languages)
const LanguageDoughnutChart = ({ title, chartData }) => {
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const radius = 30;
    const strokeWidth = 8;
    const circumference = 2 * Math.PI * radius;
    
    // Group small languages into "Others" if we have more than 5
    let displayData = [...chartData];
    if (displayData.length > 5) {
        const top5 = displayData.slice(0, 4);
        const rest = displayData.slice(4);
        const restPercent = rest.reduce((a, b) => a + b.percentage, 0);
        const restCount = rest.reduce((a, b) => a + b.count, 0);
        top5.push({
            name: 'Others',
            count: restCount,
            percentage: parseFloat(restPercent.toFixed(1)),
            color: '#8a99a8'
        });
        displayData = top5;
    }

    if (displayData.length === 0) {
        return (
            <div className="chart-wrapper">
                <h3 className="chart-title">{title}</h3>
                <div className="no-data-msg">No language data available.</div>
            </div>
        );
    }

    let accumulatedPercentage = 0;

    return (
        <div className="chart-wrapper">
            <h3 className="chart-title">{title}</h3>
            <div className="chart-content">
                <div className="svg-container">
                    <svg viewBox="0 0 100 100" className="doughnut-svg">
                        {displayData.map((item, idx) => {
                            const percent = item.percentage;
                            // Calculate offset and rotation
                            const dashoffset = circumference - (percent / 100) * circumference;
                            const rotation = (accumulatedPercentage / 100) * 360 - 90;
                            accumulatedPercentage += percent;

                            const isHovered = hoveredIdx === idx;

                            return (
                                <circle
                                    key={idx}
                                    cx="50"
                                    cy="50"
                                    r={radius}
                                    fill="transparent"
                                    stroke={item.color}
                                    strokeWidth={isHovered ? strokeWidth + 2 : strokeWidth}
                                    strokeDasharray={`${circumference} ${circumference}`}
                                    strokeDashoffset={dashoffset}
                                    transform={`rotate(${rotation} 50 50)`}
                                    onMouseEnter={() => setHoveredIdx(idx)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                    style={{
                                        transition: 'stroke-width 0.2s ease, stroke-dashoffset 0.5s ease',
                                        cursor: 'pointer'
                                    }}
                                />
                            );
                        })}
                        {/* Center text displaying hovered language */}
                        <text x="50" y="47" textAnchor="middle" className="doughnut-center-lbl">
                            {hoveredIdx !== null ? displayData[hoveredIdx].name : 'Total'}
                        </text>
                        <text x="50" y="62" textAnchor="middle" className="doughnut-center-val">
                            {hoveredIdx !== null ? `${displayData[hoveredIdx].percentage}%` : `${chartData.length} Langs`}
                        </text>
                    </svg>
                </div>
                <div className="chart-legend">
                    {displayData.map((item, idx) => (
                        <div
                            key={idx}
                            className={`legend-item ${hoveredIdx === idx ? 'hovered' : ''}`}
                            onMouseEnter={() => setHoveredIdx(idx)}
                            onMouseLeave={() => setHoveredIdx(null)}
                        >
                            <span className="legend-dot" style={{ backgroundColor: item.color }}></span>
                            <span className="legend-name">{item.name}</span>
                            <span className="legend-value">{item.percentage}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 3. Stats Card
const StatsCard = ({ stats }) => {
    const statItems = [
        { label: 'Total Repositories', value: stats.totalRepos, icon: 'fas fa-book' },
        { label: 'Estimated Commits', value: stats.totalCommits, icon: 'fas fa-code-commit' },
        { label: 'Pull Requests Created', value: stats.totalPRs, icon: 'fas fa-code-pull-request' },
        { label: 'Issues Opened', value: stats.totalIssues, icon: 'fas fa-circle-dot' },
        { label: 'Stars Earned', value: stats.totalStars, icon: 'fas fa-star' },
        { label: 'Forks Count', value: stats.totalForks, icon: 'fas fa-code-fork' },
        { label: 'Contributed Repositories', value: stats.contributedTo, icon: 'fas fa-laptop-code' }
    ];

    return (
        <div className="stats-layout">
            <h3 className="chart-title">GitHub Contribution Stats</h3>
            <div className="stats-grid">
                {statItems.map((item, idx) => (
                    <div key={idx} className="stat-card">
                        <div className="stat-icon-wrapper">
                            <i className={item.icon}></i>
                        </div>
                        <div className="stat-text">
                            <span className="stat-value">{item.value}</span>
                            <span className="stat-label">{item.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 4. Contribution History Chart (Monthly Line Chart)
const ContributionHistoryGraph = ({ data }) => {
    const padding = { top: 20, right: 20, bottom: 35, left: 45 };
    const svgWidth = 600;
    const svgHeight = 220;
    const plotWidth = svgWidth - padding.left - padding.right;
    const plotHeight = svgHeight - padding.top - padding.bottom;
    const maxVal = Math.max(...data.map(d => d.count), 10);
    const stepX = plotWidth / (data.length - 1);

    // Create Path String
    let linePath = '';
    let areaPath = `M ${padding.left},${padding.top + plotHeight} `;

    data.forEach((item, idx) => {
        const x = padding.left + idx * stepX;
        const y = padding.top + plotHeight - (item.count / maxVal) * plotHeight;
        
        if (idx === 0) {
            linePath += `M ${x},${y} `;
        } else {
            linePath += `L ${x},${y} `;
        }
        areaPath += `L ${x},${y} `;
    });

    areaPath += `L ${padding.left + (data.length - 1) * stepX},${padding.top + plotHeight} Z`;

    return (
        <div className="chart-wrapper">
            <h3 className="chart-title">Contribution History (Last 12 Months)</h3>
            <div className="svg-chart-container">
                <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} width="100%" height="100%">
                    <defs>
                        <linearGradient id="lineAreaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0.0" />
                        </linearGradient>
                    </defs>
                    
                    {/* Grid Lines */}
                    {[0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
                        const y = padding.top + plotHeight - ratio * plotHeight;
                        return (
                            <line
                                key={idx}
                                x1={padding.left}
                                y1={y}
                                x2={svgWidth - padding.right}
                                y2={y}
                                stroke="rgba(255, 255, 255, 0.05)"
                                strokeDasharray="4 4"
                            />
                        );
                    })}

                    {/* Area under the line */}
                    <path d={areaPath} fill="url(#lineAreaGradient)" />

                    {/* The Line */}
                    <path d={linePath} fill="none" stroke="var(--accent-primary)" strokeWidth="3" />

                    {/* Interactive dots */}
                    {data.map((item, idx) => {
                        const x = padding.left + idx * stepX;
                        const y = padding.top + plotHeight - (item.count / maxVal) * plotHeight;
                        return (
                            <g key={idx} className="chart-dot-group">
                                <circle
                                    cx={x}
                                    cy={y}
                                    r="5"
                                    fill="var(--bg-primary)"
                                    stroke="var(--accent-primary)"
                                    strokeWidth="2"
                                />
                                <circle
                                    cx={x}
                                    cy={y}
                                    r="10"
                                    fill="transparent"
                                    style={{ cursor: 'pointer' }}
                                />
                                <title>{`${item.count} contributions in ${item.label}`}</title>
                            </g>
                        );
                    })}

                    {/* X-Axis labels */}
                    {data.map((item, idx) => {
                        const x = padding.left + idx * stepX;
                        return (
                            <text
                                key={idx}
                                x={x}
                                y={svgHeight - 10}
                                textAnchor="middle"
                                fill="var(--text-secondary)"
                                fontSize="11"
                            >
                                {item.label}
                            </text>
                        );
                    })}

                    {/* Y-Axis Labels */}
                    {[0, 0.5, 1].map((ratio, idx) => {
                        const y = padding.top + plotHeight - ratio * plotHeight;
                        return (
                            <text
                                key={idx}
                                x={padding.left - 10}
                                y={y + 4}
                                textAnchor="end"
                                fill="var(--text-secondary)"
                                fontSize="11"
                            >
                                {Math.round(ratio * maxVal)}
                            </text>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};

// 5. Commit Hourly Activity Chart
const CommitHourlyGraph = ({ hourData }) => {
    const padding = { top: 15, right: 15, bottom: 35, left: 35 };
    const svgWidth = 600;
    const svgHeight = 220;
    const plotWidth = svgWidth - padding.left - padding.right;
    const plotHeight = svgHeight - padding.top - padding.bottom;
    const maxVal = Math.max(...hourData, 1);
    
    const barSpacing = 4;
    const barWidth = (plotWidth / 24) - barSpacing;

    return (
        <div className="chart-wrapper">
            <h3 className="chart-title">Commit Activity by Hour (Local Time)</h3>
            <div className="svg-chart-container">
                <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} width="100%" height="100%">
                    <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--accent-cyan)" />
                            <stop offset="100%" stopColor="rgba(255, 159, 28, 0.2)" />
                        </linearGradient>
                    </defs>

                    {/* Grid Lines */}
                    {[0, 0.5, 1].map((ratio, idx) => {
                        const y = padding.top + plotHeight - ratio * plotHeight;
                        return (
                            <line
                                key={idx}
                                x1={padding.left}
                                y1={y}
                                x2={svgWidth - padding.right}
                                y2={y}
                                stroke="rgba(255, 255, 255, 0.05)"
                            />
                        );
                    })}

                    {/* Bars */}
                    {hourData.map((val, idx) => {
                        const x = padding.left + idx * (barWidth + barSpacing) + barSpacing / 2;
                        const barHeight = (val / maxVal) * plotHeight;
                        const y = padding.top + plotHeight - barHeight;

                        return (
                            <g key={idx} className="chart-bar-group">
                                <rect
                                    x={x}
                                    y={y}
                                    width={barWidth}
                                    height={barHeight}
                                    fill="url(#barGradient)"
                                    rx="2"
                                />
                                <title>{`${val} commits at ${String(idx).padStart(2, '0')}:00`}</title>
                            </g>
                        );
                    })}

                    {/* X-Axis labels (every 2 hours to avoid crowding) */}
                    {Array(24).fill(0).map((_, idx) => {
                        if (idx % 2 !== 0) return null;
                        const x = padding.left + idx * (barWidth + barSpacing) + barWidth / 2 + barSpacing / 2;
                        return (
                            <text
                                key={idx}
                                x={x}
                                y={svgHeight - 12}
                                textAnchor="middle"
                                fill="var(--text-secondary)"
                                fontSize="11"
                            >
                                {String(idx).padStart(2, '0')}
                            </text>
                        );
                    })}

                    {/* Y-Axis Labels */}
                    {[0, 0.5, 1].map((ratio, idx) => {
                        const y = padding.top + plotHeight - ratio * plotHeight;
                        return (
                            <text
                                key={idx}
                                x={padding.left - 8}
                                y={y + 4}
                                textAnchor="end"
                                fill="var(--text-secondary)"
                                fontSize="11"
                            >
                                {Math.round(ratio * maxVal)}
                            </text>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};

// 6. Interactive Contribution Grid & Snake Animation
const ContributionSnakeGrid = ({ contributions, username }) => {
    const containerRef = useRef(null);
    const [grid, setGrid] = useState([]);
    const [snake, setSnake] = useState([]);
    const [food, setFood] = useState(null);
    const [score, setScore] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);

    // Build the grid and initialize snake & food
    useEffect(() => {
        if (!contributions || contributions.length === 0) return;

        // Form columns of 7 days representing weeks
        const formattedGrid = [];
        let tempWeek = [];
        
        // Start date details to offset first week padding
        const firstDayOfWeek = new Date(contributions[0].date).getDay();
        for (let i = 0; i < firstDayOfWeek; i++) {
            tempWeek.push({ isPadding: true });
        }

        contributions.forEach(day => {
            tempWeek.push(day);
            if (tempWeek.length === 7) {
                formattedGrid.push(tempWeek);
                tempWeek = [];
            }
        });

        if (tempWeek.length > 0) {
            while (tempWeek.length < 7) {
                tempWeek.push({ isPadding: true });
            }
            formattedGrid.push(tempWeek);
        }

        setGrid(formattedGrid);

        // Initialize Snake in center of grid
        const centerCol = Math.floor(formattedGrid.length / 2);
        setSnake([
            [centerCol, 3],
            [centerCol - 1, 3],
            [centerCol - 2, 3]
        ]);

        // Place food on an active cell (level > 0)
        placeFood(formattedGrid);
        setScore(0);

        // Auto Scroll to the end of the grid (latest dates) on load
        if (containerRef.current) {
            containerRef.current.scrollLeft = containerRef.current.scrollWidth;
        }
    }, [contributions]);

    const placeFood = (currentGrid) => {
        if (!currentGrid || currentGrid.length === 0) return;
        
        // Filter out all cells with contributions > 0
        const activeCells = [];
        currentGrid.forEach((col, colIdx) => {
            col.forEach((day, rowIdx) => {
                if (!day.isPadding && day.level > 0) {
                    activeCells.push({ col: colIdx, row: rowIdx });
                }
            });
        });

        if (activeCells.length > 0) {
            // Pick a random active cell as food
            const randomCell = activeCells[Math.floor(Math.random() * activeCells.length)];
            setFood(randomCell);
        } else {
            // Fallback if there are no contributions: pick a random valid cell
            const randomCol = Math.floor(Math.random() * currentGrid.length);
            const randomRow = Math.floor(Math.random() * 7);
            if (!currentGrid[randomCol][randomRow].isPadding) {
                setFood({ col: randomCol, row: randomRow });
            }
        }
    };

    // Snake game update loop
    useEffect(() => {
        if (isPaused || !grid || grid.length === 0 || !food || snake.length === 0) return;

        const tick = () => {
            setSnake(prevSnake => {
                const head = prevSnake[0];
                const [headCol, headRow] = head;
                
                // Vector towards food
                const dCol = food.col - headCol;
                const dRow = food.row - headRow;

                // Determine primary moving direction (move horizontal or vertical)
                let moves = [];
                if (Math.abs(dCol) >= Math.abs(dRow)) {
                    // Try horizontal first
                    moves.push([headCol + Math.sign(dCol), headRow]);
                    moves.push([headCol, headRow + Math.sign(dRow)]);
                } else {
                    // Try vertical first
                    moves.push([headCol, headRow + Math.sign(dRow)]);
                    moves.push([headCol + Math.sign(dCol), headRow]);
                }

                // Append general wandering options in case primary moves are blocked
                moves.push([headCol + 1, headRow]);
                moves.push([headCol - 1, headRow]);
                moves.push([headCol, headRow + 1]);
                moves.push([headCol, headRow - 1]);

                // Filter valid moves (in bounds, not padding, not hitting itself)
                const validMove = moves.find(([c, r]) => {
                    // Bounds check
                    if (c < 0 || c >= grid.length || r < 0 || r > 6) return false;
                    // Padding check
                    if (grid[c][r].isPadding) return false;
                    // Self collision check
                    const isSelf = prevSnake.some(([sc, sr]) => sc === c && sr === r);
                    if (isSelf) return false;
                    return true;
                });

                if (!validMove) {
                    // Re-initialize snake if trapped
                    const centerCol = Math.floor(grid.length / 2);
                    return [
                        [centerCol, 3],
                        [centerCol - 1, 3],
                        [centerCol - 2, 3]
                    ];
                }

                const [nextCol, nextRow] = validMove;
                const isFoodEaten = nextCol === food.col && nextRow === food.row;

                if (isFoodEaten) {
                    // Eaten! Grow snake, increment score, place new food
                    setScore(prev => prev + 1);
                    setTimeout(() => placeFood(grid), 0);
                    return [[nextCol, nextRow], ...prevSnake];
                } else {
                    // Move forward (add head, remove tail)
                    return [[nextCol, nextRow], ...prevSnake.slice(0, -1)];
                }
            });
        };

        timerRef.current = setInterval(tick, 150);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [grid, food, isPaused, snake]);

    return (
        <div className="snake-layout">
            <div className="snake-header">
                <h3 className="chart-title">Contribution Grid & Active Snake</h3>
                <div className="snake-controls">
                    <span className="snake-score"><i className="fas fa-trophy text-yellow"></i> Score: {score}</span>
                    <button onClick={() => setIsPaused(!isPaused)} className="snake-pause-btn">
                        <i className={`fas ${isPaused ? 'fa-play' : 'fa-pause'}`}></i> {isPaused ? 'Resume' : 'Pause Snake'}
                    </button>
                </div>
            </div>
            
            {/* Scrollable Contribution Grid Container */}
            <div className="grid-scroll-outer">
                <div className="grid-scroll-inner" ref={containerRef}>
                    <div className="contrib-grid">
                        {grid.map((week, colIdx) => (
                            <div key={colIdx} className="contrib-week-col">
                                {week.map((day, rowIdx) => {
                                    if (day.isPadding) {
                                        return <div key={rowIdx} className="contrib-cell cell-padding"></div>;
                                    }

                                    // Check if snake segment
                                    const isHead = snake[0] && snake[0][0] === colIdx && snake[0][1] === rowIdx;
                                    const isBody = snake.slice(1).some(([sc, sr]) => sc === colIdx && sr === rowIdx);
                                    const isFood = food && food.col === colIdx && food.row === rowIdx;

                                    let cellClass = `contrib-cell level-${day.level}`;
                                    if (isHead) cellClass += ' snake-head';
                                    else if (isBody) cellClass += ' snake-body';
                                    else if (isFood) cellClass += ' snake-food';

                                    return (
                                        <div
                                            key={rowIdx}
                                            className={cellClass}
                                            title={!isFood ? `${day.count} contributions on ${day.date}` : `Snake Target!`}
                                        ></div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid Legend & Instructions */}
            <div className="grid-footer">
                <div className="grid-instructions">
                    <span>Watch the snake eat active contribution cells live!</span>
                </div>
                <div className="grid-legend">
                    <span>Less</span>
                    <span className="legend-cell level-0"></span>
                    <span className="legend-cell level-1"></span>
                    <span className="legend-cell level-2"></span>
                    <span className="legend-cell level-3"></span>
                    <span className="legend-cell level-4"></span>
                    <span>More</span>
                </div>
            </div>
        </div>
    );
};

// 7. Loading skeletons while fetching
const LoadingSkeletons = () => {
    return (
        <div className="analytics-loading-grid">
            <div className="loading-card glass-card span-2 skeleton-shine">
                <div className="skeleton-row-split">
                    <div className="skeleton-circle"></div>
                    <div className="skeleton-details">
                        <div className="skeleton-line header-style"></div>
                        <div className="skeleton-line text-style"></div>
                        <div className="skeleton-line-row">
                            <div className="skeleton-block"></div>
                            <div className="skeleton-block"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loading-card glass-card skeleton-shine">
                <div className="skeleton-line header-style centered"></div>
                <div className="skeleton-doughnut"></div>
            </div>
            <div className="loading-card glass-card skeleton-shine">
                <div className="skeleton-line header-style centered"></div>
                <div className="skeleton-doughnut"></div>
            </div>
            <div className="loading-card glass-card span-2 skeleton-shine">
                <div className="skeleton-line header-style"></div>
                <div className="skeleton-grid-placeholder">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="skeleton-bar-item"></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GithubAnalytics;
