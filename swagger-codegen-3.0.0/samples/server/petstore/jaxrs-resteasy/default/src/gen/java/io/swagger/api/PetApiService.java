package io.swagger.api;

import io.swagger.api.*;
import io.swagger.model.*;

import java.io.File;
import io.swagger.model.ModelApiResponse;
import io.swagger.model.Pet;

import java.util.List;
import io.swagger.api.NotFoundException;

import java.io.InputStream;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;

public interface PetApiService {
      Response addPet(Pet body,SecurityContext securityContext)
      throws NotFoundException;
      Response deletePet(Integer petId,String apiKey,SecurityContext securityContext)
      throws NotFoundException;
      Response findPetsByStatus(List<String> status,SecurityContext securityContext)
      throws NotFoundException;
      Response findPetsByTags(List<String> tags,SecurityContext securityContext)
      throws NotFoundException;
      Response getPetById(Integer petId,SecurityContext securityContext)
      throws NotFoundException;
      Response updatePet(Pet body,SecurityContext securityContext)
      throws NotFoundException;
      Response updatePetWithForm(Integer petId,String name,String status,SecurityContext securityContext)
      throws NotFoundException;
      Response uploadFile(Integer petId,String additionalMetadata,FormDataContentDisposition fileDetail,SecurityContext securityContext)
      throws NotFoundException;
}
