import { ResourceType } from '@medplum/fhirtypes';
import { useCallback, useState } from 'react';
import { CodeInput } from '../CodeInput/CodeInput';

export interface ResourceTypeInputProps {
  readonly name: string;
  readonly placeholder?: string;
  readonly defaultValue?: ResourceType;
  readonly autoFocus?: boolean;
  readonly testId?: string;
  readonly onChange?: (value: ResourceType | undefined) => void;
}

export function ResourceTypeInput(props: ResourceTypeInputProps): JSX.Element {
  const [resourceType, setResourceType] = useState<string | undefined>(props.defaultValue);
  const onChange = props.onChange;

  const setResourceTypeWrapper = useCallback(
    (newResourceType: string | undefined) => {
      setResourceType(newResourceType);
      if (onChange) {
        onChange(newResourceType as ResourceType);
      }
    },
    [onChange]
  );

  return (
    <CodeInput
      data-autofocus={props.autoFocus}
      data-testid={props.testId}
      defaultValue={resourceType}
      onChange={setResourceTypeWrapper}
      name={props.name}
      placeholder={props.placeholder}
      binding="https://medplum.com/fhir/ValueSet/resource-types"
      creatable={false}
      maxValues={0}
      clearable={false}
    />
  );
}
