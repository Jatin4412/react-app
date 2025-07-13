
function Alert({alert}) {
  return (
    alert &&
    <div>
      <div className={`position-fixed end-0 alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{alert.type[0].toUpperCase() + alert.type.slice(1)}</strong> {alert.message}
      </div>
    </div>
  );
}

export default Alert;
