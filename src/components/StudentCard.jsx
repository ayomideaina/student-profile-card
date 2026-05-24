import Badge from "./Badge";
import StatBar from "./StatBar";

const getGrade = (score) => {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
};

const StudentCard = ({
  firstName,
  lastName,
  track,
  score,
  isActive,
  skills,
  avatar,
}) => {
  const grade = getGrade(score);
  const statusLabel = isActive ? "Active" : "Inactive";

  return (
    <section
      className={`student-card ${isActive ? "card-active" : "card-inactive"}`}>
      <img
        src={avatar}
        alt={`${firstName} ${lastName}`}
        className="card-avatar"
      />

      <h3 className="card-name">{`${firstName} ${lastName}`}</h3>

      <div className="card-badges">
        <Badge label={track} type="track" />
        <Badge label={statusLabel} type="status" />
        <Badge label={`Grade: ${grade}`} type="grade" />
      </div>

      <StatBar score={score} label="Score" />

        <div className="card-skills">
            <p className="skills-title">Skills</p>
            {skills.length > 0 ? (
            <ul className="skills-list">
                {skills.map((skill) => (
                <li key={skill} className="skill-item">
                    {skill}
                </li>
                ))}
            </ul>
            ) : (
            <p className="skills-empty">No skills listed yet</p>
            )}
        </div>
    </section>
  );
};

export default StudentCard;
