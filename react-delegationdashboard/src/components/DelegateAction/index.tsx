import React, { useState } from 'react'
import { useContext } from '../../context';

import DelegateModal from '../DelegateModal';
import Delegation from '../../contracts/Delegation';

const DelegateAction = () => {
  const { dapp, erdLabel } = useContext();
  const [showDelegateModal, setShowDelegateModal] = useState(
    false
  );

  const handleDelegate = (value: string) => {
    const delegationContract = new Delegation(dapp.proxy, dapp.provider);
    delegationContract.sendDelegate(value).then();
  }
  return (
    <div>
      <button onClick={() => setShowDelegateModal(true)} className="btn btn-primary mt-3">
        Delegate
      </button>
      <DelegateModal show={showDelegateModal} title="Delegate now" description={`Select the amount of ${erdLabel} you want to delegate.`}
        handleClose={() => {
          setShowDelegateModal(false);
        }} handleContinue={(value) => handleDelegate(value)} />
    </div>
  );
};

export default DelegateAction;