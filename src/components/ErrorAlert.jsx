import React from "react";

export default function ErrorAlert({ message, onRetry }) {
  return (
    <div className="alert alert-danger text-center" role="alert">
      <p className="mb-2 fw-semibold">
        {message || "Something went wrong. Please try again."}
      </p>
      {onRetry && (
        <button className="btn btn-sm btn-outline-light" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
}
