import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Editor, NgxEditorModule, Toolbar, toDoc, toHTML } from 'ngx-editor';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { FieldInputEditTextComponent } from '../../../../components/field-input-edit-text/field-input-edit-text.component';
import { intf_camposFieldEditText } from '../../../../share/interface/interfaces';
import { ToastMsgComponent } from '../../../../components/toast-msg/toast-msg.component';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { style } from '@angular/animations';
import { directus } from '../../../../core/services/directus';
import { DatumLineasInvestigacion, LineasInvestigacion, MocoResponseLineasInvestigacion } from '../../../../core/services/db_interfaces/Lineas_Investigacion';
import { DatumGruposInvestigacion, GruposInvestigacion, MocoResponseGruposInvestigacion } from '../../../../core/services/db_interfaces/Grupos_Investigacion';
import { MatButtonModule } from '@angular/material/button';
import { GruposInvestigacionComponent } from '../../components/grupos-investigacion/grupos-investigacion.component';




@Component({
  selector: 'app-new-idea-page',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, // lo emplea mat-error entre otros
     MatSelectModule, MatInputModule, HttpClientModule,
    FormsModule, ReactiveFormsModule, MatIconModule, MatDividerModule, MatCheckboxModule,
    GruposInvestigacionComponent, FieldInputEditTextComponent, ToastMsgComponent, AngularEditorModule, MatButtonModule
  ],
  templateUrl: './new-idea-page.component.html',
  styleUrl: './new-idea-page.component.scss',
})
export class NewIdeaPageComponent implements OnInit, OnDestroy{


  validacionFecha = false

  camposFieldEditText: intf_camposFieldEditText[] = [
    {
      label: 'Pregunta o problema que origina la ídea',
      SubLabel:'(250 palabras) Identificar de manera sistemática, organizada y objetiva un problema o necesidad y el contexto de su concurrencia con el proposito de responder a una pregunta que aumente el conocimiento y la información sobre algo desconocido, mejorar algun proceso o construir una herramienta tecnológica. Responde a la pregunta ¿Que se quiere saber sobre el problema a analizar? se debe indagar que esta ocurriendo, realizar un diagnostico de lo que esta pasando; en caso de querer comparar, tambien se debe indagar cómo se presenta el problema en varios contextos. Se deben definir si se desea saber las causas del problema, predecir que sucederá en el futuro, o resolverlo.',
      nameField: 'Problema_Idea'
    },
    {
      label: 'Antecedentes',
      SubLabel:'(500 palabras) Estado de arte de la información, resumen de la revisión del conocimiento existente.',
      nameField: 'Antecedentes'
    },
    {
      label: 'Justificación',
      SubLabel:`(350 palabras) Exposición de los motivos que merece la investigación, el desarrollo o la innovación,
      los beneficios que brindará y quienes seran los beneficiados. La justificación puede ser de caracter teórico, práctico o metodológico.
       a) justificación práctica: Cuando su desarrollo ayuda a resolver un problema o por lo menos, propone estrategias que de aplicarlas contribuirían a resolverlo. b) justificación teórica:
       Se desarrolla cuando el propósito de estudio es generar reflexión y debate académico sobre el conocimiento existente, confrontar una teoría, contrastar resultados o hacer epistemología
       del conocimiento. c) justificación metodológica: surge cuando la investigación a desarrollar propone un nuevo método o estrategia para generar conocimiento valido y confiable.`,
       nameField: 'Justificacion'
    },
    {
      label: 'Descripción de la ídea',
      SubLabel:'En este apartado se debe explicar con claridad de que se tratará el proyecto de investigación que se desea hacer. Debe estar redactado en forma clara y coherente para que no haya lugar a dudas',
      nameField: 'Descripcion_Idea'
    },
    {
      label: 'Bibliografía empleada',
      SubLabel: 'Relacione unicamente la referencia en el texto, ya sea en forma de pie de página o como ítem independiente. Utilice normas APA, referidas a este aspecto.',
      nameField: 'Bibliografia_Empleada'
    }
  ]
  estadoValidacionLineasInvestigacionSeleccionadas = false;

  textToastMensaje: string = `Velit culpa pariatur fugiat magna cupidatat id irure in deserunt laborum. Elit enim ipsum
  aute exercitation. Sit et ex aliquip do ex veniam nisi veniam ullamco aliqua. In minim voluptate pariatur elit non
  non consectetur incididunt occaecat voluptate. Non aute nulla cillum est ex ut aliqua occaecat in qui aliquip anim
  minim reprehenderit. Anim adipisicing fugiat nostrud irure labore et reprehenderit ut amet dolore veniam.`;

  jsonDoc = toHTML({
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
  })

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
  gruposInvestigacion: DatumGruposInvestigacion[] = [];

  public formulario: FormGroup = this.formBuilder.group({
    Entidad: ['',[Validators.maxLength(100)],[]],
    Fecha_Idea: ['11/04/2024',[Validators.required],[]],
    nombreProponente: ['Rigo Rios',[],[]],
    email: ['rigoberto.rios@igac.gov.co',[Validators.email],[]],
    cedula: [123456,[Validators.minLength(6), Validators.maxLength(14)],[]],
    celular: [ 3106777777,[],[]],
    Titulo_Idea: ["Exploración Hidrocarburos",[Validators.required, Validators.minLength(3), Validators.maxLength(200)],[]],

    Investigacion_Cientifica: [false,[],[]],
    Desarrollo_Tecnologico: [false,[],[]],
    Innovacion: [false,[],[]],

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
    Desarrollo_Tecnologico2: ['',[Validators.maxLength(200)],[]],
    Apropiacion_Conocimiento: ['',[Validators.maxLength(200)],[]],
    Formacion_CTEL: ['',[Validators.maxLength(200)],[]],

    Problema_Idea: [`<font face="Arial">Ingresar<font face="Arial">&#160; <b>texto con formato aqui</b></font></font>`,[],[]],
    Antecedentes: [`<font face="Arial">Ingresar<font face="Arial">&#160; <b>texto con formato aqui</b></font></font>`,[],[]],
    Justificacion: ['',[],[]],
    Descripcion_Idea: ['',[],[]],
    Bibliografia_Empleada: [/* { value: this.jsonDoc, disabled: false } */,[],[]],

  })

  constructor(private router: Router, private formBuilder: FormBuilder){
  }

  ngOnInit(): void {
    // this.editor = new Editor();
    // this.getGruposLineasInvestigacion();
    this.setDataTestForm();
    // this.formulario.controls["Entidad"].setValue("Agustin Codazzi Igac")
    // alert("falta la validacion de los check de los grupos de investigación")
  }
  setDataTestForm() {
    this.formulario.setValue
  }
  /* async getGruposLineasInvestigacion() {
    try {
      // let responseLineasInvestigacion: LineasInvestigacion = await directus.items('Lineas_Investigacion').readByQuery({ sort: ['Id_Linea_Investigacion'] })  as LineasInvestigacion;
      let responseLineasInvestigacion: LineasInvestigacion =  MocoResponseLineasInvestigacion;

      // let responseGruposInvestigacion: GruposInvestigacion = await directus.items('Grupos_Investigacion').readByQuery({ sort: ['Id_Grupo_Investigacion'] })  as GruposInvestigacion;
      let responseGruposInvestigacion: GruposInvestigacion = MocoResponseGruposInvestigacion ;
      this.ordenarLineasInvestigacionConGrupos(responseLineasInvestigacion.data, responseGruposInvestigacion.data);
    } catch (error) {
      console.log({error});
    }
  } */
  /* ordenarLineasInvestigacionConGrupos(LineasInvestigacion: DatumLineasInvestigacion[], GruposInvestigacion: DatumGruposInvestigacion[]) {
      console.log(LineasInvestigacion);

      GruposInvestigacion = GruposInvestigacion.map(e => e = {...e, lineasInvestigacion:[]})
      GruposInvestigacion.forEach(GI => {
        LineasInvestigacion.forEach(LI => {
          if (LI.id_grupo_investigacion == GI.Id_Grupo_Investigacion) GI.lineasInvestigacion?.push(LI)
        });
      });

      console.log(GruposInvestigacion);
      this.gruposInvestigacion = GruposInvestigacion;


  } */

  /* checkedLI(GI: DatumGruposInvestigacion, LI: DatumLineasInvestigacion, adicionarLineaInv: any): void {
    console.log(adicionarLineaInv);
    console.log(GI);
    console.log(LI);
    let LineaIvestigacionSelected = this.formulario.value.LineaIvestigacionSelected;
    if (adicionarLineaInv) {
      this.formulario.controls['LineaIvestigacionSelected'].setValue([...LineaIvestigacionSelected, LI])

    } else {
      LineaIvestigacionSelected = LineaIvestigacionSelected.filter((linInv: { Id_Linea_Investigacion: string; }) => linInv.Id_Linea_Investigacion !== LI.Id_Linea_Investigacion)
      this.formulario.controls['LineaIvestigacionSelected'].setValue(LineaIvestigacionSelected)
    }
    console.log(this.formulario.value.LineaIvestigacionSelected.length < 1);
    this.estadoValidacionLineasInvestigacionSeleccionadas = this.formulario.value.LineaIvestigacionSelected.length < 1; // quita el msm de requerimiento del campo
    console.log(this.estadoValidacionLineasInvestigacionSeleccionadas);

  } */

  ngOnDestroy(): void {
    // this.editor?.destroy();
  }

  goDashBoard() {

    this.router.navigate(['/home/dashboard']);

  }



  fnValidacionFecha():boolean{
    this.validacionFecha = (this.formulario.controls["Fecha_Idea"].errors)?true:false
    return (this.formulario.controls["Fecha_Idea"].errors)?true:false
  }


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

  validacionCampo(field: string){

    return this.formulario.controls[field].errors
      && this.formulario.controls[field].touched;
  }

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

  validacionLineasInvestigacionSeleccionadas(): boolean {
    this.estadoValidacionLineasInvestigacionSeleccionadas = this.formulario.value.LineaIvestigacionSelected.length < 1;
    return this.estadoValidacionLineasInvestigacionSeleccionadas
  }

  onSave(accion:string):void{

    console.log({accion});
    if (accion != "submit") {

      if (this.validacionLineasInvestigacionSeleccionadas()) {

        console.log(this.formulario);

        const fnValidacionFecha = this.fnValidacionFecha();

        console.log({fnValidacionFecha});
        /* if (this.formulario.status == "VALID") {
          alert("ready")
        } else {
          alert("with erros")
        } */

        // this.resetFormulario()
      }

    }

  }


}
