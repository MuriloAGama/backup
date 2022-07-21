﻿using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PersonalBlog.src.dtos;
using PersonalBlog.src.services;

namespace BlogPessoal.src.controladores
{
    [ApiController]
    [Route("api/Authentication")]
    [Produces("application/json")]
    public class AuthenticationController : ControllerBase
    {
        #region Attribute

        private readonly IAuthentication _services;

        #endregion


        #region Constructor

        public AuthenticationController(IAuthentication services)
        {
            _services = services;
        }

        #endregion


        #region Methods

        /// <summary>
        /// Get Authorization
        /// </summary>
        /// <param name="authentication">AuthenticationDTO</param>
        /// <returns>ActionResult</returns>
        /// <remarks>
        /// Requisition example:
        ///
        ///     POST /api/Authentication
        ///     {
        ///        "email": "gustavo@domain.com",
        ///        "senha": "134652"
        ///     }
        ///
        /// </remarks>
        /// <response code="201">Return user created</response>
        /// <response code="400">request error</response>
        /// <response code="401">E-mail or invalid password</response>
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(AuthorizationDTO))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult> AuthenticationAsync([FromBody] AuthenticationDTO authentication)
        {
            if (!ModelState.IsValid) return BadRequest();

            try
            {
                var authorization = await _services.GetAuthorizationAsync(authentication);
                return Ok(authorization);
            }
            catch (Exception ex)
            {
                return Unauthorized(ex.Message);
            }
        }

        #endregion
    }
}