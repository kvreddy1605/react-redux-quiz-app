import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../Button/Button'

describe('Button Component Test', () => {
    const props = {
        clicked: jest.fn(),
        children: 'This is Button Children'
    };
    const Component = <Button {...props}/>
    it('should match latest snapshot', ()=>{
        const snapshot = renderer.create(Component)
        expect(snapshot.toJSON()).toMatchSnapshot()
    })
})