import React, {useState} from 'react';
import { useStep } from 'react-hooks-helper';
import Auth from './Auth';
import Child from './Child';
import Parent from './Parent';
import Success from './Success';

const nftData = {
  bchAddress: '',
  currentGroup: {            // current group --- one object
    ticker: '',
    name: '',
    image: '',
    initialQuantity: 0,
  },
  children: {               // children    ---- array group
    ticker: '',
    name: '',
    groupName: '',        // disabled dropdown
    image: '',
    mintQuantity: ''
  }
}

const steps = [
  { id: 'auth' },
  { id: 'parent' },
  { id: 'child' },
  { id: 'success' }
]

const Container = () => {
  const [formData, setForm] = useState(nftData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0
  });

  const props = { formData, setForm, navigation };

  switch(step.id) {
    case 'auth':
      return <Auth { ...props } />
    case 'parent':
      return <Parent { ...props } />
    case 'child':
      return <Child { ...props } />
    case 'success':
      return <Success  { ...props }/> 
    default:
      return 'Invalid'
  }
}

export default Container;
