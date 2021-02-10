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
    initialQuantity: '',
  },
  children: [
    {               // children    ---- array group
      ticker: '',
      name: '',
      image: '',
      mintQuantity: ''
    }
  ]
}

const steps = [
  { id: 'auth' },
  { id: 'parent' },
  { id: 'child' },
  { id: 'success' }
]

const Container = () => {
  const [formData, setForm] = useState(nftData);
  const [childIdx, setChildIdx] = useState(0);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0
  });

  const props = { formData, setForm, childIdx, setChildIdx, navigation };

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
