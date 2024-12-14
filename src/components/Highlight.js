export const HttpMethodBadge = ({ method, children }) => {
    let borderColor, textColor, text;
  
    switch (method.toLowerCase()) {
      case 'post':
        borderColor = '#007bff'; // blue
        textColor = '#007bff';
        text = 'POST';
        break;
      case 'delete':
        borderColor = '#dc3545'; // red
        textColor = '#dc3545';
        text = 'DELETE';
        break;
      case 'get':
        borderColor = '#28a745'; // green
        textColor = '#28a745';
        text = 'GET';
        break;
      case 'put':
        borderColor = '#ffc107'; // yellow
        textColor = '#ffc107';
        text = 'PUT';
        break;
      default:
        borderColor = '#555'; // default gray
        textColor = '#555';
        text = method.toUpperCase();
        break;
    }
  
    return (
      <span
        style={{
          border: `2px solid ${borderColor}`,
          color: textColor,
          borderRadius: '10px',
          padding: '0.2rem 0.5rem',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontSize: '0.8rem',
          display: 'inline-block',
          minWidth: '3rem', // Adjust width to ensure consistent size
          textAlign: 'center',
        }}
      >
        {text}
      </span>
    );
  };
  