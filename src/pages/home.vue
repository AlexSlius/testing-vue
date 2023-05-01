<template>
    <form>
        <ItemInput v-for="item in itemFields" :key="item.id" :id="item.id" :title="item.label" :name="item.nameInput"
            :value="item.value" :update="updateItemValue" />
    </form>
</template>

<script>
import ItemInput from "@/components/ui/Input/index.vue";

export default {
    name: 'HomePage',
    data() {
        return {
            itemFields: [
                {
                    id: 0,
                    label: 'Name',
                    nameInput: 'name',
                    value: 'Alex',
                },
                {
                    id: 1,
                    label: 'LastName',
                    nameInput: 'lastname',
                    value: 'Sliusarchuk'
                }
            ],
        }
    },
    methods: {
        updateItemValue: function ({ id, value }) {
            let index = this.itemFields.findIndex(item => item.id == id);
            this.itemFields.splice(index, 1, { ... this.itemFields[index], ...{ value: value } })
        }
    },
    components: {
        ItemInput
    }
}
</script>

<style lang="scss">
form {
    display: grid;
    gap: 18px;
}
</style>
