const legalDocuments = {
  es: {
    legalNotice: {
      slug: '/aviso-legal',
      title: 'Aviso Legal',
      summary:
        'Información legal relativa a la titularidad del sitio web, condiciones generales de uso, propiedad intelectual y limitación de responsabilidad.',
      sections: [
        {
          title: 'Titularidad del sitio web',
          paragraphs: [
            'En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa que este sitio web es titularidad de:',
          ],
          list: [
            'Itsglimmer S.L.',
            'CIF: B21624044',
            'Domicilio: PS. Bonanova, 9 – 08022 Barcelona',
            'Email: admin@itsglimmer.com',
          ],
        },
        {
          title: 'Condiciones generales de uso',
          paragraphs: [
            'El acceso y uso de este sitio web atribuye la condición de usuario y conlleva la aceptación de los términos aquí descritos.',
            'El usuario se compromete a hacer un uso adecuado del sitio y a no emplearlo para actividades ilícitas o contrarias a la buena fe.',
          ],
        },
        {
          title: 'Propiedad intelectual',
          paragraphs: [
            'Todo el contenido del sitio web, incluyendo textos, marcas, logos, imágenes y código fuente, es propiedad de Itsglimmer S.L. o de sus licenciantes y está protegido por la legislación vigente.',
            'Queda prohibida su reproducción, distribución o modificación sin autorización expresa.',
          ],
        },
        {
          title: 'Responsabilidad',
          paragraphs: [
            'Itsglimmer S.L. no se responsabiliza del uso indebido del sitio ni de posibles errores en los contenidos, aunque velará por su actualización y exactitud.',
          ],
        },
      ],
    },
    cookiePolicy: {
      slug: '/politica-de-cookies',
      aliases: ['/privacidad-y-politica-de-cookies'],
      title: 'Política de Cookies',
      summary:
        'Información sobre las cookies técnicas utilizadas en el sitio web y su finalidad.',
      sections: [
        {
          paragraphs: [
            'Esta web utiliza únicamente cookies técnicas necesarias para la autenticación de usuarios registrados y el funcionamiento básico del sitio.',
          ],
        },
        {
          title: '¿Qué son las cookies?',
          paragraphs: [
            'Son pequeños archivos que se almacenan en el dispositivo del usuario y permiten el correcto funcionamiento del sitio.',
          ],
        },
        {
          title: 'Tipos de cookies utilizadas',
          list: [
            'Cookies técnicas: necesarias para permitir la navegación y el acceso seguro a las áreas privadas del sitio.',
          ],
        },
        {
          title: 'No se utilizan',
          list: ['Cookies de análisis', 'Cookies publicitarias', 'Cookies de terceros'],
        },
        {
          paragraphs: [
            'El usuario puede configurar su navegador para bloquear o eliminar estas cookies, aunque ello podría afectar al funcionamiento del sitio.',
          ],
        },
      ],
    },
    privacyPolicy: {
      slug: '/politica-de-privacidad',
      title: 'Política de Privacidad',
      summary:
        'Información sobre el tratamiento de datos personales por parte de Itsglimmer S.L. conforme al RGPD y la LOPDGDD.',
      sections: [
        {
          title: 'Responsable del tratamiento',
          paragraphs: [
            'En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), se informa que el responsable del tratamiento de los datos personales es:',
          ],
          list: [
            'Itsglimmer S.L.',
            'CIF: B21624044',
            'Domicilio: PS. Bonanova, 9 – 08022 Barcelona (España)',
            'Correo electrónico de contacto: admin@itsglimmer.com',
          ],
        },
        {
          title: '1. Categorías de datos tratados',
          groups: [
            {
              title: 'a) Información personal de los usuarios (empleados)',
              paragraphs: [
                'Cuando un empleado utiliza la plataforma Glimmer a través de su empresa, podemos recoger los siguientes datos:',
              ],
              list: [
                'Nombre completo',
                'Correo electrónico de trabajo',
                'Cargo y departamento dentro de la empresa',
                'Foto de perfil (si la suben)',
                'Descripciones personales o sobre su rol (si las proporcionan)',
                'Preferencias e intereses configurados en la plataforma para personalizar el contenido',
                'Habilidades que el usuario declara tener',
                'Interacciones con el contenido (qué leen, cuánto tiempo, si lo guardan o comparten, etc.)',
                'Resultados de cuestionarios (respuestas, aciertos, errores y tiempo de respuesta)',
              ],
            },
            {
              title: 'b) Información financiera y de facturación de la empresa cliente',
              list: [
                'Nombre de la empresa',
                'Datos de contacto para facturación (nombre, email y dirección)',
                'Identificador del cliente en Stripe',
                'Detalles del plan contratado, fechas de renovación y estado de los pagos',
                'Historial de facturación',
              ],
            },
            {
              title: 'c) Información confidencial de la empresa cliente',
              list: [
                'Estructura del equipo (roles, jerarquía y quién gestiona a quién)',
                'Configuraciones específicas dentro de la plataforma, como canales de Slack o Teams si se integran',
                'Identificador del cliente en Stripe',
                'Intereses estratégicos definidos por los managers (temas, sectores o empresas que desean seguir)',
              ],
            },
            {
              title: 'd) Credenciales y seguridad',
              list: [
                'Identificadores únicos de inicio de sesión y metadatos de sesión necesarios para el acceso seguro a la plataforma',
              ],
            },
          ],
        },
        {
          title: '2. Finalidades del tratamiento',
          list: [
            'Permitir el acceso y uso de la plataforma Glimmer',
            'Personalizar la experiencia del usuario y mostrar contenido relevante',
            'Gestionar la relación contractual y la facturación con empresas clientes',
            'Activar notificaciones, recordatorios o emails automatizados relacionados con el uso del servicio, solo cuando el usuario lo haya autorizado',
            'Analizar de forma agregada el uso de la plataforma para mejorar el producto',
            'Garantizar la seguridad de las cuentas de usuario',
          ],
        },
        {
          title: '3. Base legal del tratamiento',
          paragraphs: ['El tratamiento de datos se basa en las siguientes legitimaciones:'],
          list: [
            'Ejecución de un contrato, en relación con el uso de la plataforma y la suscripción contratada por la empresa',
            'Interés legítimo, para mejorar el servicio y garantizar su seguridad',
            'Consentimiento del usuario, en los casos en que se requiere para el envío de comunicaciones o notificaciones no esenciales',
          ],
        },
        {
          title: '4. Cesión de datos',
          paragraphs: [
            'Itsglimmer S.L. no vende ni cede datos personales a terceros.',
            'No obstante, algunos datos pueden ser tratados por proveedores externos que prestan servicios necesarios para el funcionamiento de la plataforma, por ejemplo Stripe como pasarela de pagos. Estos proveedores actúan como encargados de tratamiento y han firmado los acuerdos necesarios conforme al RGPD.',
          ],
        },
        {
          title: '5. Transferencias internacionales',
          paragraphs: [
            'No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo.',
            'En caso de que en el futuro fuera necesario, se garantizarán mecanismos adecuados como Cláusulas Contractuales Tipo o adhesión a marcos de privacidad reconocidos por la Unión Europea.',
          ],
        },
        {
          title: '6. Conservación de los datos',
          paragraphs: [
            'Los datos personales se conservarán mientras dure la relación contractual con la empresa cliente o mientras el usuario mantenga su cuenta activa.',
            'Al finalizar dicha relación, los datos serán eliminados o anonimizados, salvo que exista una obligación legal de conservación, por ejemplo en materia de facturación.',
          ],
        },
        {
          title: '7. Derechos de los usuarios',
          paragraphs: [
            'En cualquier momento, el usuario podrá ejercer los siguientes derechos:',
          ],
          list: [
            'Acceso a sus datos personales',
            'Rectificación de los datos inexactos',
            'Supresión (derecho al olvido)',
            'Limitación del tratamiento',
            'Portabilidad de los datos',
            'Oposición al tratamiento',
          ],
          closing:
            'Para ejercerlos, puede enviar un correo a admin@itsglimmer.com indicando claramente el derecho que desea ejercer, acompañado de una copia de un documento identificativo. También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que se han vulnerado sus derechos.',
        },
      ],
    },
    termsAndConditions: {
      slug: '/terminos-y-condiciones',
      title: 'Términos y Condiciones del Servicio',
      summary:
        'Condiciones aplicables al acceso y uso del software SaaS Glimmer ofrecido por Itsglimmer S.L.',
      sections: [
        {
          title: 'Objeto',
          paragraphs: [
            'Estas condiciones regulan el acceso y uso del servicio ofrecido por Glimmer, un software SaaS desarrollado por Itsglimmer S.L. y accesible mediante suscripción digital.',
          ],
        },
        {
          title: 'Acceso al servicio',
          paragraphs: [
            'El acceso al software se realiza mediante invitación o contratación previa.',
            'Se ofrece un periodo gratuito de prueba de 14 días. Pasado este plazo, será necesario contratar un plan de suscripción mensual o anual.',
          ],
        },
        {
          title: 'Registro y cuentas de usuario',
          paragraphs: [
            'En la versión 2.0, los usuarios autorizados por la empresa cliente podrán crear cuentas con acceso personalizado.',
            'El usuario se compromete a mantener la confidencialidad de sus credenciales.',
          ],
        },
        {
          title: 'Uso del servicio',
          paragraphs: [
            'Está prohibido utilizar el servicio para fines ilegales, enviar contenido malicioso o acceder sin autorización a sistemas ajenos.',
            'El incumplimiento podrá suponer la suspensión o cancelación del acceso.',
          ],
        },
        {
          title: 'Suscripciones y pagos',
          paragraphs: [
            'La contratación se realiza a través de la web.',
            'Los planes incluyen renovación automática a través de Stripe, salvo cancelación previa. En clientes corporativos, podrán establecerse condiciones personalizadas mediante contrato específico.',
          ],
        },
        {
          title: 'Propiedad intelectual',
          paragraphs: [
            'El software, su diseño, algoritmos y contenido generado son propiedad de Itsglimmer S.L.',
            'Queda prohibida su reproducción o explotación sin consentimiento.',
          ],
        },
        {
          title: 'Responsabilidad',
          paragraphs: [
            'Itsglimmer S.L. no garantiza la disponibilidad ininterrumpida del servicio, aunque hará lo posible por mantener su funcionamiento óptimo.',
            'No se responsabiliza de decisiones empresariales tomadas en base al contenido generado.',
          ],
        },
        {
          title: 'Legislación aplicable y jurisdicción',
          paragraphs: [
            'Estas condiciones se rigen por la legislación española y europea.',
            'Para cualquier disputa, las partes se someten a los Juzgados y Tribunales de Barcelona, salvo que la normativa prevea otra jurisdicción imperativa.',
          ],
        },
      ],
    },
  },
  en: {
    legalNotice: {
      slug: '/en/legal-notice',
      title: 'Legal Notice',
      summary:
        'Legal information regarding website ownership, general terms of use, intellectual property, and limitation of liability.',
      sections: [
        {
          title: 'Website ownership',
          paragraphs: [
            'In compliance with Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), please be informed that this website is owned by:',
          ],
          list: [
            'Itsglimmer S.L.',
            'Tax ID (CIF): B21624044',
            'Address: PS. Bonanova, 9 – 08022 Barcelona',
            'Email: admin@itsglimmer.com',
          ],
        },
        {
          title: 'General terms of use',
          paragraphs: [
            'Access to and use of this website confers the status of user and implies acceptance of the terms described herein.',
            'The user undertakes to make proper use of the site and not to use it for unlawful activities or activities contrary to good faith.',
          ],
        },
        {
          title: 'Intellectual property',
          paragraphs: [
            'All website content, including texts, trademarks, logos, images, and source code, is the property of Itsglimmer S.L. or its licensors and is protected by applicable law.',
            'Its reproduction, distribution, or modification without express authorization is prohibited.',
          ],
        },
        {
          title: 'Liability',
          paragraphs: [
            'Itsglimmer S.L. is not responsible for improper use of the site or for possible errors in the contents, although it will strive to keep them updated and accurate.',
          ],
        },
      ],
    },
    cookiePolicy: {
      slug: '/en/cookie-policy',
      aliases: ['/en/privacy-and-cookie-policy'],
      title: 'Cookie Policy',
      summary:
        'Information about the technical cookies used on this website and their purpose.',
      sections: [
        {
          paragraphs: [
            'This website only uses technical cookies that are necessary for the authentication of registered users and the basic operation of the site.',
          ],
        },
        {
          title: 'What are cookies?',
          paragraphs: [
            'They are small files stored on the user’s device that enable the proper functioning of the site.',
          ],
        },
        {
          title: 'Types of cookies used',
          list: [
            'Technical cookies: necessary to allow browsing and secure access to the private areas of the site.',
          ],
        },
        {
          title: 'The following are not used',
          list: ['Analytics cookies', 'Advertising cookies', 'Third-party cookies'],
        },
        {
          paragraphs: [
            'Users may configure their browser to block or delete these cookies, although this could affect the proper functioning of the site.',
          ],
        },
      ],
    },
    privacyPolicy: {
      slug: '/en/privacy-policy',
      title: 'Privacy Policy',
      summary:
        'Information on the processing of personal data by Itsglimmer S.L. in accordance with the GDPR and Spanish data protection law.',
      sections: [
        {
          title: 'Data controller',
          paragraphs: [
            'In compliance with Regulation (EU) 2016/679 (GDPR) and Organic Law 3/2018 (LOPDGDD), please be informed that the controller of personal data is:',
          ],
          list: [
            'Itsglimmer S.L.',
            'Tax ID (CIF): B21624044',
            'Address: PS. Bonanova, 9 – 08022 Barcelona (Spain)',
            'Contact email: admin@itsglimmer.com',
          ],
        },
        {
          title: '1. Categories of data processed',
          groups: [
            {
              title: 'a) Personal information of users (employees)',
              paragraphs: [
                'When an employee uses the Glimmer platform through their company, we may collect the following data:',
              ],
              list: [
                'Full name',
                'Work email address',
                'Job title and department within the company',
                'Profile picture, if uploaded',
                'Personal descriptions or role-related descriptions, if provided',
                'Preferences and interests configured in the platform to personalize content',
                'Skills the user declares they have',
                'Interactions with content (what they read, how long, whether they save or share it, etc.)',
                'Questionnaire results (answers, correct responses, errors, and response time)',
              ],
            },
            {
              title: 'b) Financial and billing information of the client company',
              list: [
                'Company name',
                'Billing contact details (name, email, and address)',
                'Stripe customer identifier',
                'Plan details, renewal dates, and payment status',
                'Billing history',
              ],
            },
            {
              title: 'c) Confidential information of the client company',
              list: [
                'Team structure (roles, hierarchy, and reporting lines)',
                'Platform-specific settings, such as Slack or Teams channels if integrated',
                'Stripe customer identifier',
                'Strategic interests defined by managers (topics, sectors, or companies they want to track)',
              ],
            },
            {
              title: 'd) Credentials and security',
              list: [
                'Unique login identifiers and session metadata required for secure access to the platform',
              ],
            },
          ],
        },
        {
          title: '2. Purposes of processing',
          list: [
            'Enable access to and use of the Glimmer platform',
            'Personalize the user experience and display relevant content',
            'Manage the contractual relationship and billing with client companies',
            'Enable notifications, reminders, or automated emails related to use of the service, only when authorized by the user',
            'Analyze platform usage in aggregate form to improve the product',
            'Ensure the security of user accounts',
          ],
        },
        {
          title: '3. Legal basis for processing',
          paragraphs: ['Personal data is processed on the following legal bases:'],
          list: [
            'Performance of a contract, in relation to the use of the platform and the subscription purchased by the company',
            'Legitimate interest, to improve the service and ensure its security',
            'User consent, where required for non-essential communications or notifications',
          ],
        },
        {
          title: '4. Data sharing',
          paragraphs: [
            'Itsglimmer S.L. does not sell or transfer personal data to third parties.',
            'However, some data may be processed by external providers that deliver services necessary for the operation of the platform, such as Stripe as the payment gateway. These providers act as data processors and have signed the agreements required under the GDPR.',
          ],
        },
        {
          title: '5. International transfers',
          paragraphs: [
            'No international transfers of data outside the European Economic Area are currently carried out.',
            'If this becomes necessary in the future, appropriate safeguards will be implemented, such as Standard Contractual Clauses or adherence to privacy frameworks recognized by the European Union.',
          ],
        },
        {
          title: '6. Data retention',
          paragraphs: [
            'Personal data will be retained for as long as the contractual relationship with the client company lasts or while the user keeps their account active.',
            'Once that relationship ends, the data will be deleted or anonymized, unless there is a legal obligation to retain it, for example for billing records.',
          ],
        },
        {
          title: '7. User rights',
          paragraphs: ['Users may exercise the following rights at any time:'],
          list: [
            'Access to their personal data',
            'Rectification of inaccurate data',
            'Erasure (right to be forgotten)',
            'Restriction of processing',
            'Data portability',
            'Objection to processing',
          ],
          closing:
            'To exercise these rights, users may send an email to admin@itsglimmer.com clearly indicating the right they wish to exercise, together with a copy of an identification document. They also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD) if they consider that their rights have been infringed.',
        },
      ],
    },
    termsAndConditions: {
      slug: '/en/terms-and-conditions',
      title: 'Terms and Conditions of Service',
      summary:
        'Terms governing access to and use of the Glimmer SaaS software offered by Itsglimmer S.L.',
      sections: [
        {
          title: 'Purpose',
          paragraphs: [
            'These terms govern access to and use of the service offered by Glimmer, a SaaS software product developed by Itsglimmer S.L. and made available by digital subscription.',
          ],
        },
        {
          title: 'Access to the service',
          paragraphs: [
            'Access to the software is granted by invitation or prior subscription.',
            'A 14-day free trial period is offered. After this period, a monthly or annual subscription plan must be purchased.',
          ],
        },
        {
          title: 'Registration and user accounts',
          paragraphs: [
            'In version 2.0, users authorized by the client company may create accounts with personalized access.',
            'Users undertake to keep their credentials confidential.',
          ],
        },
        {
          title: 'Use of the service',
          paragraphs: [
            'It is prohibited to use the service for unlawful purposes, send malicious content, or access third-party systems without authorization.',
            'Non-compliance may result in suspension or cancellation of access.',
          ],
        },
        {
          title: 'Subscriptions and payments',
          paragraphs: [
            'Subscriptions are purchased through the website.',
            'Plans renew automatically through Stripe unless canceled in advance. Corporate clients may be subject to customized conditions under a specific agreement.',
          ],
        },
        {
          title: 'Intellectual property',
          paragraphs: [
            'The software, its design, algorithms, and generated content are the property of Itsglimmer S.L.',
            'Its reproduction or exploitation without consent is prohibited.',
          ],
        },
        {
          title: 'Liability',
          paragraphs: [
            'Itsglimmer S.L. does not guarantee uninterrupted availability of the service, although it will do its best to keep it operating optimally.',
            'It is not responsible for business decisions made on the basis of the generated content.',
          ],
        },
        {
          title: 'Applicable law and jurisdiction',
          paragraphs: [
            'These terms are governed by Spanish and European law.',
            'For any dispute, the parties submit to the Courts of Barcelona, unless mandatory law provides for another jurisdiction.',
          ],
        },
      ],
    },
  },
}

const homePaths = new Set(['/', '/en'])

const normalizePath = (pathname) => {
  if (!pathname) {
    return '/'
  }

  if (pathname === '/') {
    return pathname
  }

  return pathname.replace(/\/+$/, '') || '/'
}

export const getPathLanguage = (pathname) => {
  const normalizedPath = normalizePath(pathname)
  return normalizedPath.startsWith('/en') ? 'en' : 'es'
}

export const getLegalDocumentByPath = (pathname) => {
  const normalizedPath = normalizePath(pathname)

  if (homePaths.has(normalizedPath)) {
    return null
  }

  const language = getPathLanguage(normalizedPath)
  const documents = Object.values(legalDocuments[language])

  return (
    documents.find(
      (document) =>
        document.slug === normalizedPath || document.aliases?.includes(normalizedPath),
    ) || null
  )
}

export default legalDocuments
