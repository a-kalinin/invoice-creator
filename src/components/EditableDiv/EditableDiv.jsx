import React from 'react';
import PropTypes from 'prop-types';
import style from './EditableDiv.module.css';

const EditableDiv = ({ content, onChange }) => {
  const [editing, setEditing] = React.useState(false);
  const ref = React.useRef();

  return (
    <div className={style.root}>
      <div className={style.content}>
        {!editing
          ? <div ref={ref} className={style.text}>{content}</div>
          : (
            <textarea
              ref={ref}
              className={style.textarea}
              value={content}
              onChange={(e) => {
                onChange(e.target.value);
              }}
            />
          )
        }
      </div>
      <div className={style.buttons}>
        {editing && (
          <button
            className={style.button}
            type="button"
            onClick={() => setEditing(!editing)}
          >
            Cancel
          </button>
        )}
        <button
          className={style.button}
          type="button"
          onClick={() => {
            onChange(ref.current.value);
            setEditing(!editing)
          }}
        >
          {editing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

EditableDiv.propTypes = {
  /** Content */
  content: PropTypes.node,
  onChange: PropTypes.func.isRequired,
};

EditableDiv.defaultProps = {};

export default EditableDiv;
