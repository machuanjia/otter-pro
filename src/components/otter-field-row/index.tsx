import React from "react"
import PropTypes from 'prop-types';

type IProps = {
  labelClassName?: string;
  title: string;
  children: PropTypes.ReactNodeLike;
  [propName:string]:any;
};
const OtterFieldRow = ({ title, children, labelClassName='', ...args }: IProps) => {
  return <div className="flex flex-row mb-3" {...args}>
    <div className={`${labelClassName} text-weak mr-7`}>{title}</div>
    <div>{children}</div>
  </div>
}

export default OtterFieldRow
