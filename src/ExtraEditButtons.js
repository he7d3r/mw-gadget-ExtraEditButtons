if ( typeof $j != 'undefined' && typeof $j.fn.wikiEditor != 'undefined' ) {
	$j(document).ready( function() {
		$j( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
			'sections': {
				'imagens': {
					'type': 'toolbar',
					'label': 'Imagens'
				},
				'admin': {
					'type': 'toolbar',
					'label': 'Administração'
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
						}
					}
				}
			}
		} );

		$j( '#wpTextbox1' ).wikiEditor( 'addToToolbar', {
			'section': 'admin',
			'groups': {
				'delete': {
					'label': 'Eliminação rápida',
					'tools': {
						'teste': {
							label: 'Teste feito fora da caixa de areia',
							type: 'button',
							icon: 'http://upload.wikimedia.org/wikipedia/commons/4/40/Wiki_test.GIF',
							action: {
								type: 'encapsulate',
								options: {
									pre: "{" + "{ER|Teste feito fora da página adequada ([[Wikilivros:Caixa de areia]])|~~" + "~~}}"
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
									pre: "{" + "{ER|SPAM|~~" + "~~}}"
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
									pre: "{" + "{ER|Pedido de resolução de exercícios|~~" + "~~}}"
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
	} );
}