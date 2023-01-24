const awsmobile = {
  aws_project_region: 'us-east-1',
  aws_appsync_graphqlEndpoint:
    'https://sla2nph3orgjbccyqrv6bfhmfa.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-6sghtmilc5ad7op5irzigglkcu',
  aws_cognito_identity_pool_id:
    'us-east-1:e49d94d7-1b44-42de-b9b9-7eb700fa045a',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_nC1wpoTKP',
  aws_user_pools_web_client_id: '726mp0e11r1hn9jmnm77pruraj',
  oauth: {
    domain: 'abrehet7e1875ef-7e1875ef-dev.auth.us-east-1.amazoncognito.com',
    scope: [
      'phone',
      'email',
      'openid',
      'profile',
      'aws.cognito.signin.user.admin',
    ],
    redirectSignIn: 'abrehet://',
    redirectSignOut: 'abrehet://',
    responseType: 'code',
  },
  federationTarget: 'COGNITO_USER_POOLS',
  aws_cognito_username_attributes: [],
  aws_cognito_social_providers: ['GOOGLE'],
  aws_cognito_signup_attributes: ['EMAIL'],
  aws_cognito_mfa_configuration: 'OFF',
  aws_cognito_mfa_types: ['SMS'],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [],
  },
  aws_cognito_verification_mechanisms: ['EMAIL'],
};

export default awsmobile;
