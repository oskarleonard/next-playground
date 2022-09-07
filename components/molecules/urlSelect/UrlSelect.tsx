import classNames from 'classnames';
import React from 'react';
import { useRouter } from 'next/router';
import Select from 'components/atoms/select/Select';

const UrlSelect = ({
  className,
  classNameSelect,
  searchParamKey,
  urlParamsToDelete,
  sortTypes,
  isDisabled,
}: UrlSelectProp) => {
  const router = useRouter();
  const searchParams = new URLSearchParams(location.search);
  const sortQuery = searchParamKey && searchParams.get(searchParamKey);

  const currentSort =
    sortQuery ||
    (sortTypes && sortTypes?.length > 0 && sortTypes[0].value) ||
    '';

  function onSelectSort(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    if (!value) {
      delete router.query[searchParamKey];
      router.push(
        { pathname: router.pathname, query: router.query },
        undefined,
        { shallow: true }
      );
    } else {
      router.query[searchParamKey] = value;
      urlParamsToDelete?.forEach((key) => {
        delete router.query[key];
      });

      router.push(
        { pathname: router.pathname, query: router.query },
        undefined,
        { shallow: true }
      );
    }
  }

  return (
    <Select
      onChange={onSelectSort}
      value={currentSort}
      className={classNames(className)}
      classNameSelect={classNameSelect}
      isDisabled={isDisabled}
    >
      {sortTypes?.map((edition, index) => {
        return (
          <option key={index} value={edition.value} className={'font-black'}>
            {edition.name}
          </option>
        );
      })}
    </Select>
  );
};

type SortType = {
  value: string | number;
  name: string | number;
};

type UrlSelectProp = {
  id?: string;
  className?: string;
  classNameSelect?: string;
  searchParamKey: string;
  urlParamsToDelete?: string[];
  isDisabled?: boolean;
  sortTypes?: SortType[] | undefined;
};

export default UrlSelect;
