const StatBar = ({ score, label = 'Score' }) => {
  
    const color = score >= 80
    ? '#4caf50'
    : score >= 60
    ? '#ff9800'
    : '#f44336';

  return (
    <div className="stat-bar-wrapper">
      <div className="stat-bar-header">
        <span className="stat-bar-label">{label}</span>
        <span className="stat-bar-value">{score}%</span>
      </div>
      <div className="stat-bar-track">
        <div
          className="stat-bar-fill"
          style={{ width: `${score}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default StatBar;

