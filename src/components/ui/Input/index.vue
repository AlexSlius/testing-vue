<template>
    <div class="item-input-wr">
        <label>
            <p>{{ title }}</p>
            <input :name="name" v-model="valueInput" @blur="blurInput" :class="classes" />
        </label>
    </div>
</template>

<script>
// console.log("valueInput: ", this.valueInput)
export default ({
    name: "ItemInput",
    props: {
        id: Number,
        title: String,
        name: String,
        value: String,
        update: Function,
    },
    data() {
        return {
            classes: {
                error: false
            },
            valueInput: this.value,
        }
    },
    methods: {
        blurInput: function () {
            if (this.valueInput.length < 6) {
                this.classes.error = true;
            } else {
                this.classes.error = false;
            }

            this.update({ id: this.id, value: this.valueInput });
        }
    }
})
</script>

<style lang="scss">
.item-input-wr {
    font-family: sans-serif;
    font-size: 14px;

    p {
        margin: 0;
        padding: 0 0 4px 6px;
    }

    input {
        border-radius: 12px;
        outline: none;
        border: 1px solid #e3e3e3;
        background: #fff;
        height: 34px;
        width: 240px;
        padding: 4px 14px;

        &.error {
            border-color: red;
        }
    }
}
</style>