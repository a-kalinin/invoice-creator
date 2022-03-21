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
          ? (
            <div ref={ref} className={style.text}>
              {(content || '')
                .split("\n")
                .map((str, i) => (<div key={i}>{str}</div>))
              }
            </div>
          )
          : (
            <textarea
              ref={ref}
              className={style.textarea}
              defaultValue={content}
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
            if (editing) onChange(ref.current.value);
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
