
CREATE TABLE `evento` (
  `id` int(10) UNSIGNED NOT NULL,
  `titulo_evento` varchar(50) NOT NULL,
  `local_evento` varchar(50) NOT NULL,
  `data_inicio` datetime NOT NULL,
  `data_fim` datetime NOT NULL,
  `descricao` varchar(500) DEFAULT NULL
);

INSERT INTO `evento` (`id`, `titulo_evento`, `local_evento`, `data_inicio`, `data_fim`, `descricao`) VALUES
(1, 'teste', 'teste', '2020-06-30 00:00:00', '2020-06-30 00:00:00', 'teste'),
(2, 'evento 2', 'lugar', '2020-06-30 00:00:00', '2020-06-30 00:00:00', 'lalalal');

CREATE TABLE `notificacao` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_evento` int(10) UNSIGNED NOT NULL,
  `tipo_notificacao` varchar(3) NOT NULL,
  `tipo_intervalo_tempo` varchar(3) NOT NULL,
  `quantidade_tempo` int(11) NOT NULL,
  `hora_notificacao` time DEFAULT NULL
);

INSERT INTO `notificacao` (`id`, `id_evento`, `tipo_notificacao`, `tipo_intervalo_tempo`, `quantidade_tempo`, `hora_notificacao`) VALUES
(1, 1, '', '', 0, '00:00:00'),
(2, 1, '', '', 0, '15:00:00'),
(3, 1, 'E', 'D', 1, '18:30:00');



CREATE TABLE `usuario` (
  `id` int(6) UNSIGNED NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `reg_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE `usuario_evento` (
  `id_usuario`int(6) NOT NULL,
  `id_evento` int(6) NOT NULL,
  `dono_evento` boolean NOT NULL,
  `confirmado` boolean
);

ALTER TABLE `evento`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `notificacao`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_notificacao_evento_idx` (`id_evento`);


ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);


ALTER TABLE `evento`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `notificacao`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `usuario`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;COMMIT;
