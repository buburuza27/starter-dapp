import { useDelegation } from 'helpers';
import React, { useState } from 'react';
import { useContext } from 'context';
import { nominateValToHex } from 'helpers/nominate';
import UndelegateModal from './UndelegateModal';

const UndelegateAction = () => {
  const { egldLabel } = useContext();
  const { delegation } = useDelegation();
  const [showModal, setShowModal] = useState(false);

  const handleUndelegate = (value: string) => {
    delegation.sendTransaction('0', 'unDelegate', nominateValToHex(value)).then();
  };
  return (
    <div>
      <button onClick={() => setShowModal(true)} className="btn btn-red ml-3 mb-3">
        Undelegate
      </button>
      <UndelegateModal
        show={showModal}
        title="Undelegate now"
        description={`Select the amount of ${egldLabel} you want to undelegate.`}
        handleClose={() => {
          setShowModal(false);
        }}
        handleContinue={handleUndelegate}
      />
    </div>
  );
};

export default UndelegateAction;
