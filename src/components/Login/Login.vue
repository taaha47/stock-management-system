<template>
    <div class="login-container">
        <p>
            {{names}}
        </p>
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
        computed: {
          names: function() {
            return ipcRenderer.sendSync('article-repository', {
              action: "get-articles"
            });
          }
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();
                validateUser(this.userName, this.password).then(res => {
                    if (res === true) {
                        //localStorage.setItem('user', this.userName);
                        //localStorage.setItem('jwt', 'exist');
                        const val = ipcRenderer.sendSync('article-repository', {
                            action: "add-article",
                            payload: {
                              name: "value"
                            }
                        });
                        alert(val);
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
