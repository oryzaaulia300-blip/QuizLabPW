import { useState } from "react";

export default function AddTodoModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "in progress",
    priority: "low",
    deadline: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.deadline) return;
    onAdd(form);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Tambah Todo</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Judul</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="Judul tugas..."
            />
          </div>
          <div className="form-group">
            <label>Deskripsi</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              placeholder="Deskripsi tugas..."
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Status</label>
              <select name="status" value={form.status} onChange={handleChange}>
                <option value="in progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
            <div className="form-group">
              <label>Prioritas</label>
              <select name="priority" value={form.priority} onChange={handleChange}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Deadline</label>
            <input
              type="date"
              name="deadline"
              value={form.deadline}
              onChange={handleChange}
              required
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Batal
            </button>
            <button type="submit" className="btn-primary">
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
