import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../Header/Header'


describe('header Component Test', () => {
    const props = {};
    const Component = <Header {...props}/>
    it('should match latest snapshot', ()=>{
        const snapshot = renderer.create(Component)
        expect(snapshot.toJSON()).toMatchSnapshot()
    })
})