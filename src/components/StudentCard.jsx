import Badge from "./Badge";
import StatBar from "./StatBar";
import { getGrade } from "../App";

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
    <div
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
    </div>
  );
};

export default StudentCard;
