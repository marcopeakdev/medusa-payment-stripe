import StripeBase from "../core/stripe-base"
import { PaymentIntentOptions, PaymentProviderKeys } from "../types"

class AchProviderService extends StripeBase {
  static readonly identifier = PaymentProviderKeys.ACH

  constructor(_, options) {
    super(_, options)
  }

  get paymentIntentOptions(): PaymentIntentOptions {
    return {
      payment_method_types: ["us_bank_account"],
      capture_method: "automatic",
    }
  }
}

export default AchProviderService
