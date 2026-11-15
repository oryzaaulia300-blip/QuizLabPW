export default function DetailModal({ todo, onClose }) {
  if (!todo) return null;

  const priorityClass = {
    high: "badge-high",
    medium: "badge-medium",
    low: "badge-low",
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal detail-modal" onClick={(e) => e.stopPropagation()}>
        <div className="detail-grid">
          <div>
            <h3>Judul</h3>
            <p>{todo.title}</p>
          </div>
          <div>
            <h3>Status</h3>
            <p>
              <span className={`status-badge ${todo.status === "done" ? "status-done" : "status-progress"}`}>
                {todo.status}
              </span>
            </p>
          </div>
          <div>
            <h3>Deskripsi</h3>
            <p>{todo.description || "-"}</p>
          </div>
          <div>
            <h3>Prioritas</h3>
            <p>
              <span className={`priority-badge ${priorityClass[todo.priority]}`}>
                {todo.priority}
              </span>
            </p>
          </div>
          <div className="full-width">
            <h3>Deadline</h3>
            <p>{todo.deadline}</p>
          </div>
        </div>
        <div className="modal-actions" style={{ marginTop: "1.5rem" }}>
          <button className="btn-cancel" onClick={onClose}>
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
