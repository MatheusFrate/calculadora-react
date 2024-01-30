import Button from "./components/Button";
import Input from "./components/Input";


import { Container, Content, Row } from "./styles";
import React, { useState } from 'react';



const App = () => {
  const [currentEquation, setCurrentEquation] = useState('0');
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operator, setOperator] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperator('');
  

  }
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleEquation = (operation) => {
  
    if(firstNumber === '0' && operator === ''){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperator(operation);
      setCurrentEquation(`${String(currentNumber)} ${operation} `);
      
    } else {

      const equation = `${firstNumber} ${operator} ${currentNumber}`;
      // eslint-disable-next-line no-eval
      const result = eval(equation);
      console.log(result);
      console.log(isNaN(result));
      if(isNaN(result) || result === Infinity){
        setCurrentEquation('ERROR equation invalid');
        setCurrentNumber('0');
      }else{
        setCurrentNumber(String(result));
        setCurrentEquation(`${String(currentEquation)} ${String(currentNumber)} = ${String(result)}`);
      }
      setFirstNumber('0');
      setOperator('')
    }
  }

  const handleEquals = () => {
    if(operator !== '' ){
      handleEquation(operator);
    }
  }

  return (
   
      <Container >
        <Content>
          <Input value = {currentEquation}/>
          <Input value = {currentNumber}/>
          <Row>
              <Button label=" *"onClick ={() => handleEquation('*')}/>
              <Button label=" /" onClick ={() => handleEquation('/')}/>
              <Button label=" -" onClick ={() => handleEquation('-')}/>
              <Button label=" C" onClick ={handleOnClear}/>
            </Row>
          <Row>
              <Button label=" 7" onClick ={() => handleAddNumber('7')}/>
              <Button label=" 8" onClick ={() => handleAddNumber('8')}/>
              <Button label=" 9" onClick ={() => handleAddNumber('9')}/>
              <Button label=" +" onClick ={() => handleEquation('+')}/>
            </Row>
            <Row>
              <Button label=" 4" onClick ={() => handleAddNumber('4')}/>
              <Button label=" 5" onClick ={() => handleAddNumber('5')}/>
              <Button label=" 6" onClick ={() => handleAddNumber('6')}/>
              <Button label=" =" onClick ={ handleEquals}/>
            </Row>
            <Row>
              <Button label=" 1" onClick ={() => handleAddNumber('1')}/>
              <Button label=" 2" onClick ={() => handleAddNumber('2')}/>
              <Button label=" 3" onClick ={() => handleAddNumber('3')}/>
              <Button label=" 0" onClick ={() => handleAddNumber('0')} />
            </Row>
        </Content>
      </Container>
    
  );
}

export default App;
