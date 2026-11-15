export default function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal confirm-modal">
        <div className="confirm-icon">⚠️</div>
        <h2>Konfirmasi Hapus</h2>
        <p>{message}</p>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onCancel}>
            Batal
          </button>
          <button className="btn-danger" onClick={onConfirm}>
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
