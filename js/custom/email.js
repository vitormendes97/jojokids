(function(){
   // Email Class
    function Email() {
        //Config
        var config = {
            endpoint: 'http://admin.salaovip.com.br'
        };

        // Submit Signup Form
        var send = function(e) {
            e.preventDefault();

            $('#btn-submit-svip').prop('disabled',true);

            //Validate Sign Up Form
            var form = $(e.target),
                formRawData = form.serializeArray(),
                formData = {};
            
            // Form Data
            formRawData.map(function(field) {
                var fieldTemp = {};
                fieldTemp[field.name] = field.value;
            });

            for (var i in formRawData) {
                formData[formRawData[i].name] = formRawData[i].value;
            }

            // Format Form Data
            var msg = 'Nome: ' + formData.name + 
            // '<br/>CPF: ' + formData.cpf +
            '<br/>Email: ' + formData.email +
            // '<br/>N. de Pessoas: ' + formData.pessoas +
            // '<br/>Data: ' + formData.data +
            // '<br/>Horário: ' + formData.horario +
            // '<br/>Evento: ' + formData.evento +
            '<br/>Mensagem: ' + formData.message;
            formData = {
                retorno_site: '',
                email_site: 'contato@jojokids.com.br',
                nome_site: 'Jojo Kids',
                nome: formData.name,
                email: formData.email,
                assunto: 'Nova mensagem do seu Site!',
                mensagem: msg
            };

            sendSignUp(formData);
        };

        // Send Sign Up Form
        var sendSignUp = function(formData) {
            $.post(config.endpoint + '/widgets/email_sites', formData)
            .done(function(res){
               alert('Comentário enviado com Sucesso!');
               $('#btn-submit-svip').prop('disabled',false);
            })
            .fail(function(err) {
                alert('Não foi possível enviar seu comentário.');
            });
        };

        return {
            send: send
        };
    }

    var email = new Email();

    // Listeners
    $(function(){
        $('.contact-form').submit(email.send);    
    });
    
})();

