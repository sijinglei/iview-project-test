<template>
    <Row>
        <i-col span="12">
            <Rate show-text v-model="valueText"></Rate>
        </i-col>
        <i-col span="12">
            <Rate show-text v-model="valueCustomText">
                <span style="color: #f5a623">{{ valueCustomText }}</span>
            </Rate>
        </i-col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                valueText: 3,
                valueCustomText: 3.8
            }
        }
    }
</script>
