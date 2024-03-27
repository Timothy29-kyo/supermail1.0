/* __placeholder__ */
export default (await import('vue')).defineComponent({
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
});
