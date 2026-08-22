variable "aws_region" {
  description = "Região da AWS utilizada para provisionamento"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Nome utilizado como prefixo dos recursos"
  type        = string
  default     = "taskflow-devops"
}
