import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import InputPassword from '../InputPassword.vue'

describe('InputPassword', () => {

    it('component exist', () => {
        const wrapper = mount(InputPassword);
        expect(wrapper.classes('input-password')).toBe(true)
        expect(wrapper.text()).toContain("Exercise Input Password")
    })

});

