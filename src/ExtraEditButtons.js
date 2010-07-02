if ( typeof $j != 'undefined' && typeof $j.fn.wikiEditor != 'undefined' ) {
	$j(document).ready( function() {
		$j( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
			'sections': {
				'imagens': {
					'type': 'toolbar',
					'label': 'Imagens'
				}
			}
		} );

		$j( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
			'section': 'advanced',
			'group': 'format',
			'tools': {
				'my-code': {
					label: 'Código',
					type: 'button',
					icon: 'http://upload.wikimedia.org/wikipedia/commons/2/23/Button_code.png',
					action: {
						type: 'encapsulate',
						options: {
							pre: "<code>",
							post: "</code>"
						}
					}
				},
				'my-pre': {
					label: 'Código pré-formatado',
					type: 'button',
					icon: 'http://upload.wikimedia.org/wikipedia/commons/3/3c/Button_pre.png',
					action: {
						type: 'encapsulate',
						options: {
							pre: "<pre>",
							post: "</pre>"
						}
					}
				},
				'my-source': {
					label: 'Código-fonte',
					type: 'button',
					icon: 'http://upload.wikimedia.org/wikipedia/commons/d/d2/Button_source.png',
					action: {
						type: 'encapsulate',
						options: {
							pre: "<source lang=>",
							post: "</source>"
						}
					}
				},
				'my-commnet': {
					label: 'Comentário',
					type: 'button',
					icon: 'http://upload.wikimedia.org/wikipedia/commons/3/3b/Comment-button-bg.png',
					action: {
						type: 'encapsulate',
						options: {
							pre: "<!-- ",
							post: " -->"
						}
					}
				}
			}
		} );

		$j( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
			'section': 'imagens',
			'groups': {
				'faces': {
					'label': 'Carinhas',
					'tools': {
						'sad': {
							label: 'Triste',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/d/d8/Sad.png',
							action: {
								type: 'encapsulate',
								options: {
									pre: "[[Image:Sad.png]]"
								}
							}
						},
						'smile': {
							label: 'Sorriso',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/2/26/Smile.png',
							action: {
								type: 'encapsulate',
								options: {
									pre: "[[Image:Smile.png]]"
								}
							}
						},
						'teeth': {
							label: 'Sorridente',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/7/72/Teeth.png',
							action: {
								type: 'encapsulate',
								options: {
									pre: "[[Image:Teeth.png]]"
								}
							}
						},
						'tongue': {
							label: 'Levado',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/c/c4/Tongue.png',
							action: {
								type: 'encapsulate',
								options: {
									pre: "[[Image:Tongue.png]]"
								}
							}
						},
						'confused': {
							label: 'Confuso',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/6/68/Confused.png',
							action: {
								type: 'encapsulate',
								options: {
									pre: "[[Image:Confused.png]]"
								}
							}
						},
						'cry': {
							label: 'Lágrimas',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/d/d8/Cry.png',
							action: {
								type: 'encapsulate',
								options: {
									pre: "[[Image:Cry.png]]"
								}
							}
						},
						'wink': {
							label: 'Piscando',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/9/9a/Wink.png',
							action: {
								type: 'encapsulate',
								options: {
									pre: "[[Image:Wink.png]]"
								}
							}
						},
						'sleeping': {
							label: 'Dormindo',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/3/38/Sleeping.png',
							action: {
								type: 'encapsulate',
								options: {
									pre: "[[Image:Sleeping.png|27px]]"
								}
							}
						}
					}
				},
				'outras': {
					'label': 'Outras',
					'tools': {
						'agree': {
							label: 'Concordo',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/9/94/Symbol_support_vote.svg',
							action: {
								type: 'encapsulate',
								options: {
									pre: "[[Image:Symbol support vote.svg|15px]] '''Concordo'''"
								}
							}
						},

						'disagree': {
							label: 'Discordo',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/7/7f/Symbol_oppose_vote.svg',
							action: {
								type: 'encapsulate',
								options: {
									pre: "[[Image:Symbol oppose vote.svg|15px]] '''Discordo'''"
								}
							}
						},
						'done': {
							label: 'Feito',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/4/4e/Button_fait2.png',
							action: {
								type: 'encapsulate',
								options: {
									pre: "[[Image:Yes check.svg|15px]] '''Feito'''"
								}
							}
						},
						'comment': {
							label: 'Comentário',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/4/4d/Button_reticence.png',
							action: {
								type: 'encapsulate',
								options: {
									pre: "[[Image:Symbol comment vote.svg|15px]] '''Comentário'''"
								}
							}
						}
					}
				}
			}
		} );


		$j( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
			'section': 'main',
			'group': 'insert',
			'tools': {
				'my-math': {
					label: 'Fórmula matemática',
					type: 'button',
					icon: 'http://bits.wikimedia.org/skins-1.5/common/images/button_math.png',
					action: {
						type: 'encapsulate',
						options: {
							pre: "<math>",
							post: "</math>"
						}
					}
				},
				'my-red': {
					label: 'Texto vermelho',
					type: 'button',
					icon: 'http://upload.wikimedia.org/wikipedia/commons/8/8d/Button_rouge.png',
					action: {
						type: 'encapsulate',
						options: {
							pre: '<span style="color:red">',
							post: "</span>"
						}
					}
				}
			}
		} );

		$j( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
			'section': 'main',
			'group': 'format',
			'tools': {
				'my-strikethrough': {
					label: 'Riscado',
					type: 'button',
					icon: 'http://upload.wikimedia.org/wikipedia/commons/c/c9/Button_strike.png',
					action: {
						type: 'encapsulate',
						options: {
							pre: "<s>",
							post: "</s>"
						}
					}
				}
			}
		} );

		if ( "http://pt.wikibooks.org" == wgServer) {
			$j( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
				'sections': {
					'admin': {
						'type': 'toolbar',
						'label': 'Administração'
					}
				}
			} );

			$j( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
				'section': 'admin',
				'groups': {
					'delete': {
						'label': 'Eliminação',
						'tools': {
							'teste': {
								label: 'Teste feito fora da caixa de areia',
								type: 'button',
								icon: 'http://upload.wikimedia.org/wikipedia/commons/4/40/Wiki_test.GIF',
								action: {
									type: 'encapsulate',
									options: {
										pre: "{" + "{ER|Teste feito fora da página adequada ([[Wikilivros:Caixa de areia]])|~~" + "~~}}\n"
									}
								}
							},
							'spam': {
								label: 'SPAM',
								type: 'button',
								icon: 'http://upload.wikimedia.org/wikipedia/commons/3/3d/ButtonSpam.png',
								action: {
									type: 'encapsulate',
									options: {
										pre: "{" + "{ER|SPAM|~~" + "~~}}\n"
									}
								}
							},
							'exer': {
								label: 'Pedido de resolução de exercícios',
								type: 'button',
								icon: 'http://upload.wikimedia.org/wikipedia/commons/1/11/Button_Nuvola_apps_edu_lang.png',
								action: {
									type: 'encapsulate',
									options: {
										pre: "{" + "{ER|Pedido de resolução de exercícios|~~" + "~~}}\n"
									}
								}
							},
							'propor': {
								label: 'Propor eliminação da página/imagem',
								type: 'button',
								icon: 'http://upload.wikimedia.org/wikipedia/commons/9/9f/Button_broom3.png',
								action: {
									type: 'encapsulate',
									options: {
										pre: "{" + "{Eliminação}}\n"
									}
								}
							},
							'vda': {
								label: 'Violação dos direitos de autor',
								type: 'button',
								icon: 'http://upload.wikimedia.org/wikipedia/commons/7/75/Wiki_c_copy.gif',
								action: {
									type: 'encapsulate',
									options: {
										pre: "{" + "{VDA|1=}}\n"
									}
								}
							},
							'pedia': {
								label: 'Inadequado: Conteúdo enciclopédico',
								type: 'button',
								icon: 'http://upload.wikimedia.org/wikipedia/commons/c/cb/Button_wikipedia.png',
								action: {
									type: 'encapsulate',
									options: {
										pre: "{" + "{Inadequado|Conteúdo enciclopédico|[[w:]]|~~"  +"~~}}\n"
									}
								}
							}
						}
					}
				}
			} );
		}
	} );
}