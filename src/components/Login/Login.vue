<template>
    <div class="login-container">
        <h4>Login</h4>
        <form>
            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" type="email" v-model="email" required autofocus>
            </div>
            <div>
                <label for="password" >Password</label>
                <div>
                    <input id="password" type="password" v-model="password" required>
                </div>
            </div>
            <div>
                <button type="submit" @click="handleSubmit">
                    Login
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import {ipcRenderer} from "electron";
    export default {
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                validateUser(this.userName, this.password).then(res => {
                    if (res === true) {
                        localStorage.setItem('user', this.userName);
                        localStorage.setItem('jwt', 'exist');

                        if (localStorage.getItem('jwt') !== null) {
                            ipcRenderer.sendSync('add-item', {"name": "taaha"});
                        }
                    } else {
                        alert("cant log you in");
                    }
                })
            }
        }
    }
    async function validateUser(username, password) {
        if (password === 'password') return true;
        return false;
    }
</script>

<style>
    .login-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding: 20px 50px;
    }
</style>
