export interface AccountType {
  address: string;
  balance: string;
  nonce: number;
  code?: string;
}

export interface DelegationContractType {
  name: string;
  gasLimit: number;
  data: string;
}

export class ContractOverview {
  ownerAddress: string;
  serviceFee?: string;
  maxDelegationCap: string;
  initialOwnerFunds?: string;
  automaticActivation: string;
  withDelegationCap?: boolean;
  changeableServiceFee?: boolean;
  createdNounce?: boolean;
  unBondPeriod?: number;
  public constructor(
    ownerAddress: string = '',
    serviceFee?: string,
    maxDelegationCap: string = '',
    initialOwnerFunds?: string,
    automaticActivation: string = 'false',
    withDelegationCap?: boolean,
    changeableServiceFee?: boolean,
    createdNounce?: boolean,
    unBondPeriod?: number
  ) {
    this.ownerAddress = ownerAddress;
    this.serviceFee = serviceFee;
    this.maxDelegationCap = maxDelegationCap;
    this.initialOwnerFunds = initialOwnerFunds;
    this.automaticActivation = automaticActivation;
    this.withDelegationCap = withDelegationCap;
    this.changeableServiceFee = changeableServiceFee;
    this.createdNounce = createdNounce;
    this.unBondPeriod = unBondPeriod;
  }
}

export class StatCardType {
  title!: string;
  value!: string;
  valueUnit?: string;
  svg!: string;
  color!: string;
  percentage?: string;
  children?: any;
}

export class NodeType {
  blsKey!: string;
  status!: { [key: string]: string };
  queueIndex?: string;
  queueSize?: string;
  public constructor(
    blsKey: string,
    status: { [key: string]: string },
    queueIndex?: string,
    queueSize?: string
  ) {
    this.blsKey = blsKey;
    this.status = status;
    this.queueIndex = queueIndex;
    this.queueSize = queueSize;
  }
}

export class UndelegatedValueType {
  value: string;
  timeLeft: number;
  public constructor(value: string, timeLeft: number) {
    this.value = value;
    this.timeLeft = timeLeft;
  }
}

export interface ActionModalType {
  show: boolean;
  title: string;
  description: string;
  handleClose: () => void;
  handleContinue: (value: string) => void;
}
