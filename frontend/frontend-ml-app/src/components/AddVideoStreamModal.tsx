import React, { useState } from "react";
import "./AddVideoStreamModal.css";

export function AddVideoStreamModal ({ isOpen, onClose, onCreate }) {
  const [form, setForm] = useState({
    name: "",
    streamType: "",
    rtspUrl: "",
    workflowId: ""
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(form);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">

        {/* Header */}
        <div className="modal-header">
          <h3 className="modal-title">Add New Video Stream</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit}>
          <div className="modal-body">

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter stream name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Stream Type</label>
              <select
                name="streamType"
                value={form.streamType}
                onChange={handleChange}
                required
              >
                <option value="">Select type</option>
                <option value="rtsp">RTSP</option>
                <option value="file">Video File</option>
              </select>
            </div>

            <div className="form-group">
              <label>RTSP URL</label>
              <input
                type="text"
                name="rtspUrl"
                value={form.rtspUrl}
                onChange={handleChange}
                placeholder="rtsp://user:password@host:port/stream"
              />
            </div>

            <div className="form-group">
              <label>Workflow ID</label>
              <input
                type="text"
                name="workflowId"
                value={form.workflowId}
                onChange={handleChange}
              />
            </div>

          </div>

          {/* Footer */}
          <div className="modal-footer">
            <button type="submit" className="btn-primary">
              Create Stream
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

