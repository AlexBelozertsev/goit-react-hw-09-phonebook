import React, { useState, useEffect, memo } from 'react';
// memo - замена PureComponent - повехностно сравнивает props & state
import { useDispatch, useSelector } from 'react-redux';
import { addColor } from '../../redux/color/colorActions';
import { colorOperations, colorSelectors } from '../../redux/color';
import classNames from 'classnames';
import './ColorPicker.scss';
import colorStyle from '../../styles/_colors.scss';
import options from '../../color-db.json';

function ColorPicker() {
  const dispatch = useDispatch();
  const [activeOptIdx, setActiveOptIdx] = useState(1);
  const setActiveIdx = index => setActiveOptIdx(index);
  const initialColor = useSelector(colorSelectors.getColor);
  let root = document.documentElement;

  const redefinitionBaceColor = color =>
    (colorStyle.baseColor = colorOperations.hexToRgb(color));
  root.style.setProperty('--baseColor', colorStyle.baseColor);

  const makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === activeOptIdx,
    });
  };

  useEffect(() => {
    root.style.setProperty(
      '--baseColor',
      colorOperations.hexToRgb(initialColor),
    );
  }, []);

  function handleClick(index, color) {
    setActiveIdx(index);
    dispatch(addColor({ color: color }));
    redefinitionBaceColor(color);
  }

  return (
    <div className="ColorPicker">
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index, color)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(ColorPicker);
