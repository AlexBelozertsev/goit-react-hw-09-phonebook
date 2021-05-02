import React, { useState, memo } from 'react';
// memo - замена PureComponent - повехностно сравнивает props & state
import { useDispatch } from 'react-redux';
import { addColor } from '../../redux/color/colorActions';
import classNames from 'classnames';
import './ColorPicker.scss';
import colorStyle from '../../styles/_colors.scss';
import options from '../../color-db.json';

const testColor = colorStyle.baseColor;
console.log(testColor);

function ColorPicker() {
  const dispatch = useDispatch();
  const [activeOptIdx, setActiveOptIdx] = useState(1);
  const setActiveIdx = index => setActiveOptIdx(index);

  const makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === activeOptIdx,
    });
  };

  return (
    <div className="ColorPicker">
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => {
              setActiveIdx(index);
              dispatch(addColor({ color: color }));
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(ColorPicker);
