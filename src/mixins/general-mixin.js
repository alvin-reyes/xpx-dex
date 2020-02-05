export default {
  methods: {
    getConfigForm () {
      return {
        amount: {
          label: 'Amount',
          icon: 'icon-amount-green-16h-proximax-sirius-wallet.svg',
          min: 3,
          max: 30,
          rules: {
            required: v => !!v || 'Amount is required',
            min: v => (v && v.length >= 3) || 'Amount must be less than 3 characters',
            max: v => (v && v.length <= 30) || 'Amount must be a maximum of 30 characters'
          }
        },
        generalRules: {
          notAllowSpaces: v => (v || '').indexOf(' ') < 0 || 'No spaces are allowed'
        },
        accountName: {
          label: 'Account Name',
          icon: 'icon-wallet-name-green-16h-proximax-sirius-wallet.svg',
          min: 3,
          max: 30,
          rules: {
            required: v => !!v || 'Account Name is required',
            min: v => (v && v.length >= 3) || 'Account Name must be less than 3 characters',
            max: v => (v && v.length <= 30) || 'Account Name must be a maximum of 30 characters'
          }
        },
        password: {
          label: 'Password',
          icon: 'icon-password-green-16h-proximax-sirius-wallet.svg',
          min: 8,
          max: 30,
          show: false,
          showConfirm: false,
          rules: {
            required: value => !!value || 'Password is required',
            min: v => (v && v.length >= 8) || 'Password must be less than 8 characters',
            max: v => (v && v.length <= 30) || 'Password must be a maximum of 30 characters'
          }
        },
        privateKey: {
          label: 'Private Key',
          icon: 'icon-private-key-green-16h-proximax-sirius-wallet.svg',
          min: 64,
          max: 66,
          show: false,
          rules: {
            required: value => !!value || 'Private Key is required',
            min: v => (v && v.length >= 64) || 'Private Key must be less than 64 characters',
            max: v => (v && v.length <= 66) || 'Private Key must be a maximum of 66 characters',
            isHex: v =>
              this.$blockchainProvider.isValidPrivateKey(v) || 'Private key must be Hexadecimal'
          }
        }
      }
    },
    typeButtons () {
      return {
        clear: {
          key: 'clear',
          action: 'clear',
          disabled: false,
          color: 'leve',
          loading: false,
          text: 'Clear'
        },
        create: {
          key: 'create',
          action: 'create',
          disabled: false,
          color: 'primary',
          loading: false,
          text: 'Create'
        }
      }
    },
    getArrayTitle () {
      return [
        {
          title: 'Sports',
          class: 'leve--text'
        },
        {
          title: 'Bet',
          class: 'primary--text'
        }
      ]
    }

  }
}
