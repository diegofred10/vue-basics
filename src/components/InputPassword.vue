<script setup>
import { ref } from 'vue';

let inputType = ref('password')

function showPassword() {
    if (inputType.value == 'password') {
        inputType.value = 'text'
        return
    }

    inputType.value = 'password'
}
</script>

<template>
    <div class="container text-center input-password">
        <h1 class="my-3">Exercise Input Password</h1>
        <input :type="inputType" name="" id="password" class="form-control">
        <div class="d-block">
            <span id="show-password" @click="showPassword" class="mt-2 btn btn-primary">Show Password</span>
        </div>
    </div>
</template>

<style lang="css" scoped>
    #show-password:hover {
        cursor: pointer;
        user-select: none;
    }
</style>