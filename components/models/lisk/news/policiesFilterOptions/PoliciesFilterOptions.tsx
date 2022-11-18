import React from 'react';
import classNames from 'classnames/bind';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from 'components/molecules/searchBar/SearchBar';
import Button from 'components/atoms/button/Button';
import { deleteUrlSearchParam, POLICY_PARAMS } from 'utils/urlUtils';
import {
  InsuranceEnum,
  StatusEnum,
} from 'connectivity/policies/api.policies.types';
import UrlSelect from 'components/molecules/urlSelect/UrlSelect';

function PoliciesFilterOptions({ className }: PoliciesFilterOptionsProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClearFilter = () => {
    const policyParamsKeys = Object.values(POLICY_PARAMS);
    deleteUrlSearchParam(policyParamsKeys, location, navigate);
  };

  return (
    <div className={classNames('flex flex-col', className)}>
      <div className="flex">
        <h5 className="text-2xl font-bold text-gray-900">Filter</h5>
        <Button
          data-testid="clear-all-button"
          className={'ml-auto underline border-none p-0'}
          onClick={handleClearFilter}
        >
          Clear all
        </Button>
      </div>
      <SearchBar className={'mt-2 max-w-sm'} />
      <UrlSelect
        className={'mt-4'}
        classNameSelect={'px-2 py-3'}
        searchParamKey={'insuranceType'}
        urlParamsToDelete={[POLICY_PARAMS.PAGE]}
        sortTypes={[
          { name: 'All Types', value: '' },
          { name: InsuranceEnum.HOUSEHOLD, value: InsuranceEnum.HOUSEHOLD },
          { name: InsuranceEnum.LIABILITY, value: InsuranceEnum.LIABILITY },
          { name: InsuranceEnum.HEALTH, value: InsuranceEnum.HEALTH },
        ]}
      />
      <UrlSelect
        className={'mt-4'}
        classNameSelect={'px-2 py-3'}
        searchParamKey={'policyStatus'}
        urlParamsToDelete={[POLICY_PARAMS.PAGE]}
        sortTypes={[
          { name: 'All status', value: '' },
          { name: StatusEnum.ACTIVE, value: StatusEnum.ACTIVE },
          { name: StatusEnum.PENDING, value: StatusEnum.PENDING },
        ]}
      />
    </div>
  );
}

type PoliciesFilterOptionsProps = {
  className?: string;
};

export default PoliciesFilterOptions;
