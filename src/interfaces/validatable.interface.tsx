export interface Validatable {
  // value: string | number | Date;
  valueCompare?: string | number
  type?: string
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}