import React from 'react';
import OtterAvatar from '../otter-avatar';
import Text from '../text';
import { LIB_PREFIX } from '../../constants'

const OtterTableFieldCreator = (props: { name: string }) => {
  const { name } = props;
  return (
    <div className=" flex items-center">
      {name ? (
        <>
          <OtterAvatar name={name} size="small" />
          <Text className={`${LIB_PREFIX}-table-field-creator`}>{name}</Text>
        </>
      ) : (
        '-'
      )}
    </div>
  );
};

export default OtterTableFieldCreator;
