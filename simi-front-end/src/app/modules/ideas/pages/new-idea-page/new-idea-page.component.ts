import { Component, OnDestroy, OnInit, inject} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioChange, MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { Router } from '@angular/router';

import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { FieldInputEditTextComponent } from '../../../../share/components/field-input-edit-text/field-input-edit-text.component';
import { Ideas_Investigacion, Response_Ideas_Investigacion, intf_camposFieldEditText } from '../../../../share/interface/interfaces';
import { ToastMsgComponent } from '../../../../share/components/toast-msg/toast-msg.component';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { directus } from '../../../../core/services/directus';
import { GruposInvestigacionComponent } from '../../components/grupos-investigacion/grupos-investigacion.component';
import { TipoProyectoComponent } from '../../components/tipo-proyecto/tipo-proyecto.component';
import { constantesApp, constantesNewIdea } from '../../../../share/utils/constas';
import { DatumValoresDominio, ValoresDominio } from '../../../../core/services/db_interfaces/Valores_Dominio';
import { StoreApp } from '../../../../core/store/storeApp';
import { BaseComponent } from '../../../../share/components/base/base.component';
import { EditTextRichComponent } from '../../components/edit-text-rich/edit-text-rich.component';
import { formatoFecha } from '../../../../share/utils/uitl';

/**
 * dfg
 * @author rigoriosh@gmail.com
 */
@Component({
  selector: 'app-new-idea-page', standalone: true,
  imports: [CommonModule, MatRadioModule, EditTextRichComponent, MatFormFieldModule, // lo emplea mat-error entre otros
     MatSelectModule, MatInputModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatIconModule, MatDividerModule, MatCheckboxModule,
    GruposInvestigacionComponent, FieldInputEditTextComponent, ToastMsgComponent, AngularEditorModule, MatButtonModule, TipoProyectoComponent
  ],
  templateUrl: './new-idea-page.component.html', styleUrl: './new-idea-page.component.scss',
})
export class NewIdeaPageComponent extends BaseComponent implements OnInit, OnDestroy{


  /**
   * Instanciación del store
   * para:
   *  obtener la idea seleccionada
  */
  store = inject(StoreApp)
  Entidades: DatumValoresDominio[] = []; // almacenas las entidades consultadas desde directus

  /**
   * objeto ayuda para renderizar los campos de texto enrriquecido
   */
  camposFieldEditText: intf_camposFieldEditText[] = [
    {
      label: 'Pregunta o problema que origina la ídea',
      SubLabel:'(250 palabras) Identificar de manera sistemática, organizada y objetiva un problema o necesidad y el contexto de su concurrencia con el proposito de responder a una pregunta que aumente el conocimiento y la información sobre algo desconocido, mejorar algun proceso o construir una herramienta tecnológica. Responde a la pregunta ¿Que se quiere saber sobre el problema a analizar? se debe indagar que esta ocurriendo, realizar un diagnostico de lo que esta pasando; en caso de querer comparar, tambien se debe indagar cómo se presenta el problema en varios contextos. Se deben definir si se desea saber las causas del problema, predecir que sucederá en el futuro, o resolverlo.',
      nameField: 'Problema_Idea',
      validacion: false
    },
    {
      label: 'Antecedentes',
      SubLabel:'(500 palabras) Estado de arte de la información, resumen de la revisión del conocimiento existente.',
      nameField: 'Antecedentes',
      validacion: false
    },
    {
      label: 'Justificación',
      SubLabel:`(350 palabras) Exposición de los motivos que merece la investigación, el desarrollo o la innovación,
      los beneficios que brindará y quienes seran los beneficiados. La justificación puede ser de caracter teórico, práctico o metodológico.
       a) justificación práctica: Cuando su desarrollo ayuda a resolver un problema o por lo menos, propone estrategias que de aplicarlas contribuirían a resolverlo. b) justificación teórica:
       Se desarrolla cuando el propósito de estudio es generar reflexión y debate académico sobre el conocimiento existente, confrontar una teoría, contrastar resultados o hacer epistemología
       del conocimiento. c) justificación metodológica: surge cuando la investigación a desarrollar propone un nuevo método o estrategia para generar conocimiento valido y confiable.`,
       nameField: 'Justificacion',
       validacion: false
    },
    {
      label: 'Descripción de la ídea',
      SubLabel:'En este apartado se debe explicar con claridad de que se tratará el proyecto de investigación que se desea hacer. Debe estar redactado en forma clara y coherente para que no haya lugar a dudas',
      nameField: 'Descripcion_Idea',
      validacion: false
    },
    {
      label: 'Bibliografía empleada',
      SubLabel: 'Relacione unicamente la referencia en el texto, ya sea en forma de pie de página o como ítem independiente. Utilice normas APA, referidas a este aspecto.',
      nameField: 'Bibliografia_Empleada',
      validacion: false
    }
  ]
  banderaValidacionLineasInvestigacionSeleccionadas = false;
  banderaValidacionTipoProyectoSeleccionando = false;
  validacionFecha = false
  validacionEntidad = false


  /**
   * Texto mensaje de prueba
   */
  textToastMensaje: string = `Velit culpa pariatur fugiat magna cupidatat id irure in deserunt laborum. Elit enim ipsum
  aute exercitation. Sit et ex aliquip do ex veniam nisi veniam ullamco aliqua. In minim voluptate pariatur elit non
  non consectetur incididunt occaecat voluptate. Non aute nulla cillum est ex ut aliqua occaecat in qui aliquip anim
  minim reprehenderit. Anim adipisicing fugiat nostrud irure labore et reprehenderit ut amet dolore veniam.`;

  /* jsonDoc = toHTML({
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: {
          level: 1,
          align: null
        },
        content: [
          {
            type: "text",
            text: "Hello Juan"
          }
        ]
      },
      {
        type: "paragraph",
        attrs: {
          align: null
        },
        content: [
          {
            type: "text",
            text: "This is editable text. "
          },
          {
            type: "text",
            marks: [
              {
                type: "text_color",
                attrs: {
                  color: "#d93f0b"
                }
              }
            ],
            text: "You can focus it and start typing"
          },
          {
            type: "text",
            text: "."
          }
        ]
      },
      {
        type: "paragraph",
        attrs: {
          align: null
        },
        content: [
          {
            type: "text",
            marks: [
              {
                type: "code"
              }
            ],
            text: "code block"
          }
        ]
      },
      {
        type: "blockquote",
        content: [
          {
            type: "paragraph",
            attrs: {
              align: null
            },
            content: [
              {
                type: "text",
                marks: [
                  {
                    type: "strong"
                  }
                ],
                text: "Lorem Ipsum"
              },
              {
                type: "text",
                text: " is "
              },
              {
                type: "text",
                marks: [
                  {
                    type: "text_background_color",
                    attrs: {
                      backgroundColor: "#fbca04"
                    }
                  }
                ],
                text: "simply dummy"
              },
              {
                type: "text",
                text: " text of the printing and typesetting industry. "
              },
              {
                type: "text",
                marks: [
                  {
                    type: "em"
                  }
                ],
                text:
                  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              },
              {
                type: "text",
                text:
                  ", when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            ]
          }
        ]
      },
      {
        type: "heading",
        attrs: {
          level: 2,
          align: null
        },
        content: [
          {
            type: "text",
            text: "The code block is a code editor"
          }
        ]
      },
      {
        type: "paragraph",
        attrs: {
          align: null
        },
        content: [
          {
            type: "text",
            text:
              "This editor has been wired up to render code blocks as instances of the "
          },
          {
            type: "text",
            marks: [
              {
                type: "link",
                attrs: {
                  href: "https://codemirror.net",
                  title: "https://codemirror.net",
                  target: "_blank"
                }
              }
            ],
            text: "CodeMirror"
          },
          {
            type: "text",
            text: " code editor, which provides "
          },
          {
            type: "text",
            marks: [
              {
                type: "link",
                attrs: {
                  href: "https://en.wikipedia.org",
                  title: "",
                  target: "_blank"
                }
              }
            ],
            text: "syntax highlighting"
          },
          {
            type: "text",
            text: ", auto-indentation, and similar."
          }
        ]
      },
      {
        type: "code_block",
        content: [
          {
            type: "text",
            text: "function max(a, b) {\n  return a > b ? a : b\n}"
          }
        ]
      },
      {
        type: "paragraph",
        attrs: {
          align: null
        },
        content: [
          {
            type: "text",
            text:
              "The content of the code editor is kept in sync with the content of the code block in the rich text editor, so that it is as if you're directly editing the outer document, using a more convenient interface."
          }
        ]
      },
      {
        type: "heading",
        attrs: {
          level: 4,
          align: "center"
        },
        content: [
          {
            type: "text",
            text: "Mr. Bean"
          }
        ]
      },
      {
        type: "paragraph",
        attrs: {
          align: "center"
        },
        content: [
          {
            type: "text",
            text: "The image is resizable. Include "
          },
          {
            type: "text",
            marks: [
              {
                type: "strong"
              }
            ],
            text: "image"
          },
          {
            type: "text",
            text: " plugin to enable image resizing"
          }
        ]
      },
      {
        type: "heading",
        attrs: {
          level: 3,
          align: "center"
        },
        content: [
          {
            type: "image",
            attrs: {
              src: "https://wallpapercave.com/wp/wp2318909.png",
              alt: "Bean",
              title: "Mr. Bean",
              width: "8px",
              style:`{
                height: 'auto !important'
              }`,
            }
          }
        ]
      },
      {
        type: "heading",
        attrs: {
          level: 3,
          align: null
        },
        content: [
          {
            type: "text",
            text: "Bullet list"
          }
        ]
      },
      {
        type: "bullet_list",
        content: [
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                attrs: {
                  align: null
                },
                content: [
                  {
                    type: "text",
                    marks: [
                      {
                        type: "strong"
                      }
                    ],
                    text: "Lorem Ipsum"
                  },
                  {
                    type: "text",
                    text:
                      " is simply dummy text of the printing and typesetting industry"
                  }
                ]
              },
              {
                type: "bullet_list",
                content: [
                  {
                    type: "list_item",
                    content: [
                      {
                        type: "paragraph",
                        attrs: {
                          align: null
                        },
                        content: [
                          {
                            type: "text",
                            text: "("
                          },
                          {
                            type: "text",
                            marks: [
                              {
                                type: "strong"
                              }
                            ],
                            text: "depth 1"
                          },
                          {
                            type: "text",
                            text:
                              ") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                          }
                        ]
                      },
                      {
                        type: "bullet_list",
                        content: [
                          {
                            type: "list_item",
                            content: [
                              {
                                type: "paragraph",
                                attrs: {
                                  align: null
                                },
                                content: [
                                  {
                                    type: "text",
                                    text: "("
                                  },
                                  {
                                    type: "text",
                                    marks: [
                                      {
                                        type: "strong"
                                      }
                                    ],
                                    text: "depth 2"
                                  },
                                  {
                                    type: "text",
                                    text:
                                      ") The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                attrs: {
                  align: null
                },
                content: [
                  {
                    type: "text",
                    text:
                      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
                  }
                ]
              }
            ]
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                attrs: {
                  align: null
                },
                content: [
                  {
                    type: "text",
                    text:
                      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        type: "heading",
        attrs: {
          level: 4,
          align: null
        },
        content: [
          {
            type: "text",
            text: "Ordered List"
          }
        ]
      },
      {
        type: "ordered_list",
        attrs: {
          order: 1
        },
        content: [
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                attrs: {
                  align: null
                },
                content: [
                  {
                    type: "text",
                    marks: [
                      {
                        type: "strong"
                      }
                    ],
                    text: "Lorem Ipsum"
                  },
                  {
                    type: "text",
                    text:
                      " is simply dummy text of the printing and typesetting industry"
                  }
                ]
              }
            ]
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                attrs: {
                  align: null
                },
                content: [
                  {
                    type: "text",
                    text:
                      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
                  }
                ]
              },
              {
                type: "ordered_list",
                attrs: {
                  order: 1
                },
                content: [
                  {
                    type: "list_item",
                    content: [
                      {
                        type: "paragraph",
                        attrs: {
                          align: null
                        },
                        content: [
                          {
                            type: "text",
                            text: "("
                          },
                          {
                            type: "text",
                            marks: [
                              {
                                type: "strong"
                              }
                            ],
                            text: "depth 1"
                          },
                          {
                            type: "text",
                            text:
                              ") It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                          }
                        ]
                      },
                      {
                        type: "ordered_list",
                        attrs: {
                          order: 1
                        },
                        content: [
                          {
                            type: "list_item",
                            content: [
                              {
                                type: "paragraph",
                                attrs: {
                                  align: null
                                },
                                content: [
                                  {
                                    type: "text",
                                    text: "("
                                  },
                                  {
                                    type: "text",
                                    marks: [
                                      {
                                        type: "strong"
                                      }
                                    ],
                                    text: "depth 2"
                                  },
                                  {
                                    type: "text",
                                    text:
                                      ") The chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "list_item",
            content: [
              {
                type: "paragraph",
                attrs: {
                  align: null
                },
                content: [
                  {
                    type: "text",
                    text:
                      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }) */

  /**
   * Objeto para configurar el header de los campos de texto enrriquecido
   */
  config: AngularEditorConfig = {
    editable: true,
    enableToolbar: true,
    spellcheck: true,
    height: '5rem',
    minHeight: '5rem',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    placeholder: 'Enter text here...',
    translate: 'yes',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      [
        'insertVideo',
        /* 'strikeThrough',
        'toggleEditorMode'
      'undo',
      'redo',
      'bold',
      'italic',
      'underline',
      'subscript',
      'superscript',
      'justifyLeft',
      'justifyCenter',
      'justifyRight',
      'justifyFull',
      'indent',
      'outdent',
      'insertUnorderedList',
      'insertOrderedList',
      'heading',
      'fontName'],['fontSize',
      'textColor',
      'backgroundColor',
      'customClasses',
      'link',
      'unlink',
      */
     'insertHorizontalRule',
     'removeFormat',
    'insertImage',
      ]
    ],
    showToolbar: true,
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

  // gruposInvestigacion: DatumGruposInvestigacion[] = ["GEOMATICA","SUELOS Y ECOLOGÍA","ESTUDIOS TERRITORIALES"];
  // gruposInvestigacion: DatumGruposInvestigacion[] = [];

  /**
   * obj de tipo FormGrup, donde se especifican todos los campos del formulario
   * y su respectiva configuraión de validadciones
   */
  public formulario: FormGroup = this.formBuilder.group({
    Entidad: ['',[Validators.required],[]],
    Fecha_Idea: ['',[Validators.required],[]],
    nombreProponente: ['',[],[]],
    email: ['',[Validators.email],[]],
    cedula: [,[Validators.minLength(6), Validators.maxLength(14)],[]],
    celular: [ ,[],[]],
    Titulo_Idea: [,[Validators.required, Validators.minLength(3), Validators.maxLength(200)],[]],

    Investigacion_Cientifica: [false,[],[]],
    Desarrollo_Tecnologico: [false,[],[]],
    Innovacion: [false,[],[]],

    URL_Cronograma: ['',[Validators.required, Validators.maxLength(150)],[]],

    tipoProyectoselected: [[],[Validators.required],[]],
    lineas_investigacion: [[],[],[]],
    LineaIvestigacionSelected: [[],[Validators.required],[]],

    /* geodesia: ['',[],[]],
    gestionConocimiento: ['',[],[]],
    infraDatoEspaciales: ['',[],[]],
    percepcionRemota: ['',[],[]],
    sig: ['',[],[]],
    tic: ['',[],[]],
    catastroMP: ['',[],[]],
    contaminacionSuelos: ['',[],[]],
    geografiaSuelos: ['',[],[]],
    planificacionUsoTierras: ['',[],[]],
    geopoliticaLimites: ['',[],[]],
    planificacionUrbanoRegional: ['',[],[]],
    sociedadEspacio: ['',[],[]], */

    Tiempo_Ejecucion_Proyecto: ['',[Validators.required, Validators.maxLength(50)],[]],
    Lugar_Ejecucion: ['',[Validators.required, Validators.maxLength(50)],[]],

    Nuevo_Conocimiento: ['',[Validators.maxLength(200)],[]],
    Tecnologico_Innovacion: ['',[Validators.maxLength(200)],[]],
    Apropiacion_Conocimiento: ['',[Validators.maxLength(200)],[]],
    Formacion_CTEL: ['',[Validators.maxLength(200)],[]],

    // Problema_Idea: [`<font face="Arial">Ingresar<font face="Arial">&#160; <b>texto con formato aqui</b></font></font>`,[],[]],
    Problema_Idea: [,[Validators.required],[]],
    Antecedentes: [,[Validators.required],[]],
    Justificacion: [,[Validators.required],[]],
    Descripcion_Idea: [,[Validators.required],[]],
    Bibliografia_Empleada: [/* { value: this.jsonDoc, disabled: false } */,[Validators.required],[]],

  })
  Interna: string = constantesNewIdea.Interna; // constantes
  Externa: string = constantesNewIdea.Externa; // constantes
  modoVer: boolean = false;

  constructor(router: Router, private formBuilder: FormBuilder, _snackBar: MatSnackBar){
    super(router, _snackBar);
  }

  ngOnInit(): void {
    console.log(" in NewIdeaPageComponent ");
    console.log(" this.formulario ", this.formulario);
    let ideaSeleccionanda: Ideas_Investigacion = this.store.ideaSeleccionanda()
    if (this.validateSesionTime() && ideaSeleccionanda.Codigo_Idea == '') {
      this.getValores_Dominio();
      // this.editor = new Editor();
      // this.getGruposLineasInvestigacion();
      // this.setDataTestForm();
      // this.formulario.controls["Entidad"].setValue("Agustin Codazzi Igac")
    }else{
      this.verificaSiseDebeAutoCompletarElFormulario(ideaSeleccionanda)
    }
  }

  /**
   * valida si existe una idea seleccionada
   * si existe mapea el formulario con los datos que llegan
   */
  async verificaSiseDebeAutoCompletarElFormulario(ideaSeleccionanda: Ideas_Investigacion){

    console.log(ideaSeleccionanda);
    this.modoVer = false;
    if (ideaSeleccionanda.Codigo_Idea != '') {
      this.modoVer = true
      const queryParams = {
        filter: {
          Id_Idea_Investigacion: {
            _eq: ideaSeleccionanda.Id_Idea_Investigacion,
          },
        },
        sort: ['Codigo_Idea'],
        fields:['Codigo_Idea', 'Titulo_Idea', 'estados.*', 'estados.Id_Estado.*', 'tipoProyecto', 'Fecha_Creacion', 'Id_Idea_Investigacion','Desarrollo_Tecnologico', 'Tiempo_Ejecucion_Proyecto',
        'Innovacion', 'Investigacion_Cientifica', 'Entidad', 'Fecha_Idea', 'email', 'URL_Cronograma',  'Usuario_Creador', 'Id_Convocatoria',
        'Id_Macroproyecto', 'Id_Dependencia_IGAC', 'Id_Ponente', 'Tiempo_Ejecucion', 'Lugar_Ejecucion', 'Nuevo_Conocimiento', 'Tecnologico_Innovacion',
        'Apropiacion_Conocimiento', 'Formacion_CTEL', 'Problema_Idea', 'Antecedentes', 'Justificacion', 'Descripcion_Idea', 'Bibliografia_Empleada', 'Validada',
        'Fecha_Validacion', 'lineas_investigacion.Id_Linea_Investigacion.*', 'lineas_investigacion.Id_Linea_Investigacion.Id_Grupo_Investigacion.*'
      ]
      }
      let Idea_Investigacion: Response_Ideas_Investigacion = await directus.items('Ideas_Investigacion').readByQuery(queryParams)  as Response_Ideas_Investigacion;
      ideaSeleccionanda = {...ideaSeleccionanda, ...Idea_Investigacion.data[0]}
      console.log(ideaSeleccionanda);

      const camposIdeaSeleccionanda = Object.keys(ideaSeleccionanda);
      console.log({camposIdeaSeleccionanda});

      camposIdeaSeleccionanda.forEach(campo => {
        // console.log(`${campo} => `, ideaSeleccionanda[campo])
        if (this.formulario.controls[campo]) {
          if (campo == "Fecha_Idea") { // para ajustar el formato de la fecha pra que pueda ser leido "yyyy-MM-dd"
            this.formulario.controls[campo].setValue(ideaSeleccionanda[campo].split('T')[0])
          } else if(campo == "Investigacion_Cientifica" || campo == "Desarrollo_Tecnologico" || campo == "Innovacion"){
            this.formulario.controls[campo].setValue((ideaSeleccionanda[campo]=='1')?true:false)
          } else {
            this.formulario.controls[campo].setValue(ideaSeleccionanda[campo])
          }
        }
      });

    }
    return this.modoVer;
  }

  /**
   * Obitene desde directus los valores dominio en este caso
   * los de tipo dependencia IGAC
   */
  async getValores_Dominio() {
    const Valores_Dominio = directus.items(constantesApp.Valores_Dominio);
    // const responseTipo_Dominio = await Valores_Dominio.readByQuery({limit: -1,});
    // const aa = await directus.fields.readAll();
    const filterValores_Dominio: ValoresDominio = await Valores_Dominio.readByQuery({
      filter: {
        Tipo_Dominio: {
          _contains: constantesApp.DEPENDIGAC,
        },
      },
    }) as ValoresDominio;
    console.log(filterValores_Dominio);
    this.Entidades = filterValores_Dominio.data

  }



  ngOnDestroy(): void { // this.editor?.destroy();
  }

  goDashBoard() { this.router.navigate(['/home/dashboard']); }

  /**
   * Metodo para resetear todos los campos del formulario
   */
  resetFormulario():void{
    this.formulario.reset(
      {
        Entidad:'',
        Fecha_Idea:'',
        nombreProponente:'',
        email:'',
        cedula:'',
        celular:'',
      }
    )
  }


  EntidadInterna: boolean = false;
  EntidadExterna: boolean = false;
  /**
   * Metodo para renderizar el tipo de entidad que el usuario desea informar
   * @param $event camptura el radioButtom seleccinado
   */
  onCheckboxChangeEntidadInterna($event: MatRadioChange) {
    console.log("onCheckboxChangeEntidadInterna",  $event);

    if ($event.value == constantesNewIdea.Interna) {
      this.EntidadInterna = true
      this.EntidadExterna = false
    } else {
      this.EntidadInterna = false
      this.EntidadExterna = true
      this.formulario.controls["Entidad"].setValue('')
    }
  }

  /**
   * Funcion para validar si los campos incumplen algun requerimiento configirado en el obj formulario
   * @param field nombre del camppo específico
   * @returns true si incumple alguna de las validaciones
   */
  validacionCampo(field: string){
    this.validateSesionTime()
    return this.formulario.controls[field].errors && this.formulario.controls[field].touched;
  }

  /* validacionCampoFieldEditText() {

    console.log("validacionCampoFieldEditText");

    let hasError = false;
    this.camposFieldEditText.forEach(e => {
      if (this.formulario.controls[e.nameField].errors) {
        hasError = e.validacion = true
      } else{
        hasError = e.validacion = false
      }
    })

    return hasError
  } */

  /**
   * Esta funcion valida si un campo incumple algun requerimiento, si es asi retorna el menaje
   * que se quiere mostrar al usuario
   * @param campo campo al que se quiere validar
   * @returns texto que se quiere renderizar segun requerimiento que incumple
   */
  getErrorCampo(campo: string): string {

    let respuesta = "";
    const errores = this.formulario.controls[campo].errors || {}
    for (const key of Object.keys(errores)) {
      // console.log(key);

      switch (key) {
        case 'required':
          respuesta = 'Este campo es requerido'
        break;

        case 'minlength':
          respuesta = `Mínimo ${errores['minlength'].requiredLength} caracteres.`
        break;

        case 'maxlength':
          respuesta = `Se ha excedido de la longitud maxima requerida.`
        break;

        case 'email':
          respuesta = `Ingrese un correo electrónico valido.`
        break;



        default:
          break;
      }
    }
    return respuesta
  }

  /**
   * Metodo que agrupa las validaciones de:
   * fecha, lineas de investigacion, tipo proyecto y
   * campos de texto enrriquesido
   * @returns false si no cumple
   */
  validacionesCamposRequeridos(): boolean {

    console.log(this.camposFieldEditText);

    this.banderaValidacionLineasInvestigacionSeleccionadas = this.formulario.value.LineaIvestigacionSelected.length < 1;
    this.banderaValidacionTipoProyectoSeleccionando = this.formulario.value.tipoProyectoselected.length < 1;

    this.validacionFecha = (this.formulario.controls["Fecha_Idea"].errors)?true:false
    this.validacionEntidad = (this.formulario.controls["Entidad"].errors)?true:false

    let hasError = false;
    this.camposFieldEditText.forEach(e => {
      if (this.formulario.controls[e.nameField].errors) {
        hasError = e.validacion = true
      } else{
        hasError = e.validacion = false
      }
    })

    console.log(this.camposFieldEditText);

    return !(this.banderaValidacionLineasInvestigacionSeleccionadas || this.banderaValidacionTipoProyectoSeleccionando || this.validacionFecha || this.validacionEntidad || hasError)
  }

  /**
   * Metodo final que valida campos requerido y forma json final a persistir desde directus
   * si existen campos pendientes, renderiza un mensaje informativo
   * @param accion string
   */
  async onSave(accion:string):Promise<void>{

    console.log({accion});
    if (accion  == "regresar") {
      this.router.navigate([`/home/dashboard`]);
    } else if (accion != "submit") {
      console.log(this.formulario.value);
      console.log("validacionesCamposRequeridos => ",this.validacionesCamposRequeridos());
      console.log("status => ", this.formulario.status);

      if (this.validacionesCamposRequeridos() && this.formulario.status == "VALID" /* && !this.fnValidacionFecha() && !this.validacionCampoFieldEditText() */){

        const { Antecedentes, Apropiacion_Conocimiento, Bibliografia_Empleada, Tecnologico_Innovacion, Descripcion_Idea,
          Entidad, Fecha_Idea, Formacion_CTEL, Justificacion, LineaIvestigacionSelected, Lugar_Ejecucion, Nuevo_Conocimiento,
          Problema_Idea, Tiempo_Ejecucion_Proyecto, Titulo_Idea, Investigacion_Cientifica, Desarrollo_Tecnologico,
          Innovacion, URL_Cronograma, cedula, celular, email, nombreProponente, tipoProyectoselected
        } = this.formulario.value;

        // json para enviar
        let objToSend = {
          Antecedentes,
          Apropiacion_Conocimiento,
          Bibliografia_Empleada,
          cedula,
          celular,
          Codigo_Idea: Number(new Date()),
          Desarrollo_Tecnologico,
          Descripcion_Idea,
          email,
          Entidad,
          Fecha_Creacion: new Date(),
          Fecha_Idea,
          Fecha_Validacion: new Date(),
          Formacion_CTEL,
          Id_Convocatoria:this.store.convocatoriaSelected().Id_Convocatoria,
          Id_Ponente: this.store.usuario().id,
          Innovacion,
          Investigacion_Cientifica,
          lineas_investigacion: {
              "create": LineaIvestigacionSelected,
              "update": [],
              "delete": []
          },
          Justificacion,
          Lugar_Ejecucion,
          nombreProponente,
          Nuevo_Conocimiento,
          Problema_Idea,
          Tecnologico_Innovacion,
          Tiempo_Ejecucion_Proyecto,
          Titulo_Idea,
          URL_Cronograma,
          Usuario_Creador: this.store.usuario().id,
          Validada:'false',
        }

        console.log({objToSend});
        // const result = await client.request(createItem(collection_name, item_object));
        const Ideas_Investigacion = directus.items('Ideas_Investigacion'); // instancia la coleccion
        const result = await Ideas_Investigacion.createOne(objToSend);// crean un item
        console.log(result);
        let mensaje = ``;
        if (result) {
          mensaje = `Idea creada de forma satisfactoria`;
          this.router.navigate([`/home/dashboard`]);
        }else{
          mensaje = `Se presentaron inconvenientes en la comunicación, intentado mas tarde`;
        }
        this.rederMensajeToast(mensaje);
        this.store.changeSpinner(false)
      }else{
        this.rederMensajeToast(`Existen campos que no cumplen las validaciones`);
      }

    }

  }


}
