import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';
import Auth from './Auth';
import Child from './Child';
import Parent from './Parent';
import Success from './Success';

const defaultData = {
  groupTicker: '',
  groupName: '',
  parentImg: '',
  groupInitialQuantity: '',
  childTicker: '',
  childName: '',
  childImg: '',
  childInitialQuantity: ''
};

const steps = [
  { id: 'auth' },
  { id: 'parent' },
  { id: 'child' },
  { id: 'success' }
]

const Container = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 1
  });

  const props = { formData, setForm, navigation };

  switch(step.id) {
    case 'auth':
      return <Auth { ...props } />
    case 'parent':
      return <Parent { ...props } />
    case 'child':
      return <Child { ...props } />
    /*case 'success':
      return <Success  /> */
    default:
      return 'Invalid'
  }

  return (
    <div>
      <h1>NFT Form</h1>
    </div>
  )
}

export default Container;
