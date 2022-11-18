import React, { useState } from 'react';
/*import { keyCodes } from 'src/utils/keyCodes';
import {
  isValidPassphrase,
  getPassphraseValidationErrors,
} from 'src/modules/wallet/utils/passphrase';
import Icon from 'src/theme/Icon';
import Input from 'src/theme/Input';
import Feedback from 'src/theme/feedback/feedback';*/
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import Input from 'components/atoms/input/Input';
import Button from 'components/atoms/button/Button';
import {
  inDictionary,
  validatePassphrase,
} from 'components/molecules/passphraseInput/utils/utils';
import styles from './PassphraseInput.module.css';

function PassphraseFieldset({ t = (item) => item }) {
  const {
    handleSubmit,
    register,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const passphrase = data && Object.values(data).join(' ');

    console.log('onSubmit passphrase', passphrase);

    if (validatePassphrase(passphrase)) {
      console.log('onSubmit valid');
    } else {
      setError('formError', {
        type: 'custom',
        message: 'Passphrase is not valid',
      });
    }
  };

  const onClick = () => {
    console.log('clearErrors');
    clearErrors();
  };

  console.log('errors', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>{t('Secret recovery phrase')}</label>
        <PassphraseInput
          register={register}
          inputsLength={12}
          maxInputsLength={24}
          setValue={setValue}
          errors={errors}
          clearErrors={clearErrors}
        />
      </fieldset>
      <Button type="submit" onClick={onClick}>
        Continue
      </Button>
    </form>
  );
}

function PassphraseInput({
  t = (item) => item,
  register,
  inputsLength,
  maxInputsLength,
  setValue,
  errors,
  clearErrors,
}) {
  const [showPassphrase, setShowPassphrase] = useState(false);

  const handleToggleShowPassphrase = () => {
    console.log('handleToggleShowPassphrase');
    setShowPassphrase((state) => !state);
  };

  const handleInputPaste = (event, index) => {
    event.preventDefault();
    clearErrors('formError');
    console.log('first', event.clipboardData.getData('text'));

    const pastedValue = event.clipboardData
      .getData('Text')
      .trim()
      .replace(/\W+/g, ' ')
      .split(/\s/);

    console.log('pastedValue', pastedValue.length);
    if (pastedValue.length === 1) {
      setValue(`input${index}`, pastedValue[0], { shouldValidate: true });
    } else {
      pastedValue.forEach((value, index) => {
        setValue(`input${index}`, value, { shouldValidate: true });
      });
      const passphrase = pastedValue.join(' ').trim();
      const isValidPassphrase = validatePassphrase(passphrase);
      console.log('isValidPassphrase', isValidPassphrase);

      console.log('passphrase', passphrase);
    }
  };

  const formError = Object.values(errors)[0];

  return (
    <div className={'flex relative'}>
      <div className={'absolute -top-32 right-0'}>
        <Button type="button" onClick={handleToggleShowPassphrase}>
          {showPassphrase ? t('Hide') : t('Show')}
        </Button>
      </div>
      <div
        className={classNames(
          'grid grid-cols-6 gap-8 bg-white p-16 border',
          formError ? 'border-red' : 'border-transparent'
        )}
      >
        {[...Array(inputsLength)].map((_, index) => (
          <div
            key={index}
            className={classNames(
              'flex',
              errors && errors[`input${index}`] && 'text-red'
            )}
            autoComplete="off"
          >
            <span className={'self-center'}>{`${index + 1}. `}</span>
            <Input
              type={showPassphrase ? 'text' : 'password'}
              placeholder="_________"
              onPaste={(event) => handleInputPaste(event, index)}
              {...register(`input${index}`, {
                required: 'Cannot be empty',
                onChange: () => clearErrors('formError'),
                validate: (value) => {
                  const isInDictionary = inDictionary(value);
                  if (!isInDictionary) {
                    return 'Not an english word';
                  }
                  return true;
                },
              })}
            />
          </div>
        ))}
      </div>

      <div className={styles.footerContent}>
        {formError && <span className="text-red">{formError.message}</span>}
      </div>
    </div>
  );
}

export default PassphraseFieldset;
