import StudentCard from './StudentCard';

const StudentList = ({ students, title = 'All Students', filterActive = false, children }) => {
  return (
    <section className="student-list">
      <h2 className="list-title">{title}</h2>

      {students.length === 0 ? (
        <p className="list-empty">No students to display</p>
      ) : (
        <div className="cards-grid">
          {students.map((student) => (
            filterActive
              ? student.isActive && <StudentCard key={student.id} {...student} />
              : <StudentCard key={student.id} {...student} />
          ))}
        </div>
      )}

      {children && (
        <footer className="list-footer">{children}</footer>
      )}
    </section>
  );
};

export default StudentList;

